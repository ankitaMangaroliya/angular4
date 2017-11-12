import { Component } from '@angular/core';
import { CoolLocalStorage } from 'angular2-cool-storage';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  theme: number;
  name:string
  isLogin:boolean=false;

  constructor(private localstorage: CoolLocalStorage) {
  }
  ngOnInit() {
    this.checkLogin();
  }

  checkLogin(){
    if(this.localstorage.getItem("isActive")){
      let storeData = JSON.parse(this.localstorage.getItem("isActive"));
      if(storeData && storeData.hasOwnProperty("flag")){
        this.isLogin = storeData.flag;
        if(storeData.hasOwnProperty("name")){
          this.name =storeData.name;
        }
      }
    }
  }


  generateTheme() {
    return Math.ceil(Math.random() * 15) 
  }

  loadBg() {
    let that = this,
      theme: any = that.generateTheme(),
      existing: any = 3;
      console.log("theme no ",theme);
      // existing: any = that.localStorage.getItem('theme');
    if (existing && !isNaN(parseInt(existing))) {
      existing = +existing;
    }
    while (theme == existing) {
      theme = that.generateTheme();
    }
    that.theme = theme;
    // that.localStorage.setItem('theme', theme + '');
  }

  logOut(){
    this.localstorage.removeItem('isActive');
    this.localstorage.clear();
    this.isLogin = false;
    this.name = '';
  }
}
