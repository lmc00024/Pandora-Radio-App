import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { getAuth, UserCredential } from 'firebase/auth';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { AuthResponse } from './authResponse';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  public buttonClicked!:string;
  private authObservable!: Promise<UserCredential>;

  constructor(private authService:AuthService) {
      
  }

  ngOnInit(): void {
  }

  public onSubmit(data: NgForm) {
    
    console.log("button clicked = " + this.buttonClicked);
    console.log(data.value);

    if (this.buttonClicked == 'SignUp') {
      this.authObservable = this.authService.signup(data.value.email, data.value.password);
    }
    if (this.buttonClicked == 'Login') {
      this.authObservable = this.authService.login(data.value.email, data.value.password);
    }
    
      
    this.authObservable.then(
      (data: UserCredential) => {
        console.log(data);
      }
    ).catch((error: any) => {
      console.log(error.error);
    });
    data.resetForm();
  }
  
public isSignedIn() {
  return getAuth().currentUser != null;
}

}
