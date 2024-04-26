import { Component } from '@angular/core';
import {RegistrationRequest} from "../../services/models/registration-request";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../services/services/authentication.service";
import {StorageService} from "../../services/storage/storage.service";

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

        this.router.navigate(['dashboard'])
      },
      error: (err) => {
        console.log(err);

        if (err.error.validationErrors)
          this.errorMsg = err.error.validationErrors;
        else
          this.errorMsg.push(err.error.errorMsg);
      }
    })
  }

  login() {
    this.router.navigate(['login'])
  }

}
