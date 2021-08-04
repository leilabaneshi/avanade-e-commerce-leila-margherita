import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/core/models/user';
import { UserService } from 'src/app/core/services/user.services';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profile',
  template: `
    <div class="container">
      <div class="mt-3">
        <h5 style="text-align: center;" class="list-group-item">
          Hello, {{users?.name}} <span class="mx-2"><i class="fa fa-user"></i></span>
        </h5>
        <hr>
      </div>
      <div class="row">
      <div class="card border-danger mb-3" style="max-width: 540px; margin: auto">
          <div class="row no-gutters">
            <!-- <div class="col-md-4">
              <img src="..." alt="...">
            </div> -->
            <div class="col-md-8">
              <div class="card-body text-dark">
                <h5 class="card-title">{{users?.name}} {{ users?.surname }}</h5>
                <!-- <p class="card-text">{{users?.shippingAddres?.city}}</p> -->
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>
        </div>
      </div>


  `,
  styles: [
  ]
})

export class ProfileComponent implements OnInit {
users : User | null = null;
params: string = '';
  constructor(private userService : UserService, private route:ActivatedRoute,
    private toasteService: ToastrService ) { }

  ngOnInit(): void {

    //this.route.snapshot.params

     this.route.queryParams.subscribe(params => {

      console.log(params)

      if(params && !params.user){

        this.toasteService.error('everything is broken', 'user unknown', {timeOut: 3000})

      } else {

        this.params = params.user;
        this.userService.getUser(this.params).subscribe((data)=>{
          this.users= data;
        console.log("user->", this.users);

      }, error => {

        // serve per gestire errori della chiamata

        this.toasteService.error('everything is broken', 'user unknown', {timeOut: 3000})

      })

    }

    })


  }
}
