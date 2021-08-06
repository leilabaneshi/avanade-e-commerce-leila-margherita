import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/core/models/user';
import { UserService } from 'src/app/core/services/user.services';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profile',
  templateUrl:'./profile.component.html',
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
