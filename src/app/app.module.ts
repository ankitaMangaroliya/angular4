import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginFormComponent } from './login-form/login-form.component';

import { RouterModule, Routes } from '@angular/router';

import { LaddaModule } from 'angular2-ladda';
import { CoolStorageModule } from 'angular2-cool-storage';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TestcaseComponent } from './testcase/testcase.component';
import { RequirementComponent } from './requirement/requirement.component';
import { DoctorComponent } from './doctor/doctor.component';
import { PatientComponent } from './patient/patient.component';
import { AreaComponent } from './area/area.component';
import { CityComponent } from './area/city/city.component';
import { StateComponent } from './area/state/state.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    SidebarComponent,
    DashboardComponent,
    TestcaseComponent,
    RequirementComponent,
    DoctorComponent,
    PatientComponent,
    AreaComponent,
    CityComponent,
    StateComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
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
