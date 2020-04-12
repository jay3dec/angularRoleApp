import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username;
  password;

  constructor(private http : HttpClient, private router : Router) {
    console.log('me in')
  }

  ngOnInit(): void {
    
  }

  handleLoginClick(){
    if(this.username && this.password){
      this.authenticateUser(this.username);
    } else {
      alert('enter username and password');
    }
   
  }

  authenticateUser(userName){
    localStorage.setItem("user", userName);
    if(userName == "admin"){
      this.router.navigate(['/admin']);
    } else if(userName == "manager"){ 
      this.router.navigate(['/manage']);
    } else if(userName == "general"){
      this.router.navigate(['/general'])
    }
  }
}
