import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/core/models/user';
import { UserService } from 'src/app/core/services/user.services';

@Component({
  selector: 'app-profile',
  template: `
    <h1>here you can edit your profile {{users?.name}}</h1>
  `,
  styles: [
  ]
})
export class ProfileComponent implements OnInit {
users : User | null = null;
params: string = '';
  constructor(private userService : UserService, private route:ActivatedRoute) { }

  ngOnInit(): void { this.route.queryParams.subscribe(params => {
    console.log(params)
    this.params = params.user;
    this.userService.getUser(this.params).subscribe((data)=>{
      this.users= data;
      console.log("user->", this.users);
    }, error => {
      // serve per gestire errori della chiamata
    })
  })
}}
