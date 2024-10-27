import { Component } from '@angular/core';
import {DefaultLoginLayoutComponent} from "../../components/default-login-layout/default-login-layout.component";

@Component({
  selector: 'app-login',
  imports: [
    DefaultLoginLayoutComponent
  ],
  templateUrl: './login.component.html',
  standalone: true,
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {

}
