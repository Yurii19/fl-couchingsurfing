import { Component } from '@angular/core';
import {RegistrationRequest} from "../../services/models/registration-request";
import {Router} from "@angular/router";
import {StorageService} from "../../services/storage/storage.service";
import {AuthenticationService} from "../../services/services/authentication.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registrationRequest: RegistrationRequest = { email: '', firstName: '', lastName: '', password: '' };
  errorMsg: Array<string> = [];


  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private storageService: StorageService
  ) {}


  register() {
    this.errorMsg = [];
    this.authService.register({
      body: this.registrationRequest
    }).subscribe({
      next: (res) => {
        this.storageService.token = res.accessToken as string;
        this.storageService.email = this.registrationRequest.email;

        this.router.navigate(['dashboard'])
      },
      error: (err) => {
        console.log(err);

        if (err.error.validationErrors)
          this.errorMsg = err.error.validationErrors;
        else
          this.errorMsg.push(err.error.error);
      }
    })
  }

  login() {
    this.router.navigate(['login'])
  }

}
