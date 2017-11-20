import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';

import { LaddaModule } from 'angular2-ladda';
import { CoolStorageModule } from 'angular2-cool-storage';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CoolStorageModule,
    LaddaModule.forRoot({
      style: "expand-right"
    }),
    TooltipModule.forRoot(), 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
