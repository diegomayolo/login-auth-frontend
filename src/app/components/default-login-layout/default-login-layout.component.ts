import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ɵEmptyOutletComponent} from "@angular/router";

@Component({
  selector: 'app-default-login-layout',
  templateUrl: './default-login-layout.component.html',
  standalone: true,
  imports: [
    ɵEmptyOutletComponent
  ],
  styleUrls: ['./default-login-layout.component.scss']
})
export class DefaultLoginLayoutComponent {
  @Input() title: string = "";
  @Input() primaryButtonText: string = "";
  @Input() secondaryButtonText: string = "";
  @Input() disablePrimaryBtn: boolean = true;
  @Output("login") onLogin = new EventEmitter();
  @Output("signup") onSignup = new EventEmitter();

  login()
  {
    this.onLogin.emit();
  }

  signup()
  {
    this.onSignup.emit();
  }
}
