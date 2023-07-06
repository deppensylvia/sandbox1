import { Component } from '@angular/core';

@Component({
 selector: 'app-header',
 templateUrl: './header.component.html',
 styleUrls: ['./header.component.css']
})
export class HeaderComponent {

 userName = "";

 onLogin(user: string) {
  this.userName = user;
 }
}