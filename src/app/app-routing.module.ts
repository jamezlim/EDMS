import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PatientFormComponent } from './patient/patient-form/patient-form.component';


const routes: Routes = [
  { path : 'patient-form',  component : PatientFormComponent},
  { path : 'home', component : HomeComponent},
  { path : '' , redirectTo : '/home', pathMatch : 'full'},
  // { path : '**' , redirectTo : 'home', pathMatch : 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
