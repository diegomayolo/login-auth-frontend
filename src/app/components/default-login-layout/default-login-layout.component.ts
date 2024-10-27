import {Component, Input} from '@angular/core';
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
}
