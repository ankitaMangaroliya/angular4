import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CoolLocalStorage } from 'angular2-cool-storage';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
  // encapsulation: ViewEncapsulation.None
})
export class LoginFormComponent implements OnInit {
  name:string;
  pass:string;
  processing:boolean=false;
  isLogin:boolean=false;
  @Output() onLogin = new EventEmitter();
  constructor(private localstorage: CoolLocalStorage) {
  }

  ngOnInit() {
  }

  submit(){
    let data = { "flag" : true, "name" : this.name  }
    this.localstorage.setItem("isActive", JSON.stringify(data));
    this.processing= true;
    this.onLogin.emit();
  }

}
