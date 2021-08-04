import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/core/models/user';
import { UserService } from 'src/app/core/services/user.services';

@Component({
  selector: 'app-home',
  template: `
<h1>welcome {{user?.name}}</h1>
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit {
user : User | null = null;
params: string = '';

  constructor(private route: ActivatedRoute,
              private userService: UserService) {
    console.log(route.snapshot.queryParamMap);
  }

  ngOnInit(): void {
    //this.route.snapshot.params
     this.route.queryParams.subscribe(params => {
      console.log(params)
      this.params = params.user;
      this.userService.getUser(this.params).subscribe((data)=>{
        this.user= data;
        console.log("user->", this.user);
      }, error => {
        // serve per gestire errori della chiamata
      })
    })


  }


}
