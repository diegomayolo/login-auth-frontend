import { Component } from '@angular/core';
import {DefaultLoginLayoutComponent} from "../../components/default-login-layout/default-login-layout.component";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {PrimaryInputComponent} from "../../components/primary-input/primary-input.component";
import {Router} from "@angular/router";
import {LoginService} from "../../services/login.service";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  imports: [
    DefaultLoginLayoutComponent,
    ReactiveFormsModule,
    PrimaryInputComponent
  ],
  providers: [
    LoginService
  ],
  templateUrl: './login.component.html',
  standalone: true,
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  loginForm!: FormGroup;
  constructor(
    private router: Router,
    private loginService: LoginService,
    private toastService: ToastrService
  )
  {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  login()
  {
    this.loginService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe(
      {
        next: () => this.toastService.success("Login successful"),
        error: () => this.toastService.error("Login failed")
      }
    )
  }

  signup()
  {
    this.router.navigate(["/signup"]);
  }
}
