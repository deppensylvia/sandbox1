import { Component, EventEmitter, Output } from '@angular/core';

@Component({
 selector: 'app-login',
 templateUrl: './login.component.html',
 styleUrls: ['./login.component.css']
})
export class LoginComponent{

 userName: string = '';
 @Output() login = new EventEmitter<string>();

 submit()
 {
  console.log(this.userName)
  this.login.emit(this.userName);
 }
}