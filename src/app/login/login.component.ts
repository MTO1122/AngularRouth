import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // user = {
  //   username:"",
  //   password:""
  // };
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  // login(){
  //   console.log("username:" + this.user.username);
  //   console.log("password:" + this.user.password);

  //   if(this.user.username =="mto" && this.user.password == "123"){
  //     this.router.navigateByUrl('home');
  //   }
  // }
}
