import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TestcaseComponent } from './testcase/testcase.component';
import { RequirementComponent } from './requirement/requirement.component';
import { DoctorComponent } from './doctor/doctor.component';
import { PatientComponent } from './patient/patient.component';
import { AreaComponent } from './area/area.component';
import { CityComponent } from './area/city/city.component';
import { StateComponent } from './area/state/state.component';
import { ProfileComponent } from './profile/profile.component';

const appRoutes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'doctor', component: DoctorComponent },
    { path: 'patient', component: PatientComponent },
    { path: 'area', component: AreaComponent },
    { path: 'city/:id',      component: CityComponent },
    { path: 'city', component: CityComponent },
    { path: 'state', component: StateComponent },
    { path: 'profile', component: ProfileComponent },
    {
      path: 'testcase',
      component: TestcaseComponent,
      data: { title: 'testcase List' }
    },
    {
        path: 'requirement',
        component: RequirementComponent,
        data: { title: 'requirement List' }
      },
    { path: '**', component: DashboardComponent }
  ];
  
  @NgModule({
    imports: [
      RouterModule.forRoot(
        appRoutes,
        // { enableTracing: true } // <-- debugging purposes only
      )
      // other imports here
    ]
  })
  export class AppRoutingModule { }