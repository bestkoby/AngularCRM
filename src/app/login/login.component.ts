import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AccountService } from 'src/services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginmodel = { 
    username:"",
    password:""
  }
  constructor(private accountservice:AccountService) {}

  ngOnInit(): void {
  }

  LoginUser(ngform:NgForm){
    console.log(ngform.value);
    this.accountservice.login(ngform.value).subscribe(d=>{
      console.log(d["jwt"]);
      localStorage.setItem("token",d["jwt"]);
    })
 
  }

}
