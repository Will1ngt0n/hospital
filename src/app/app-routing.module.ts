import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { PatientComponent } from './patient/patient.component';
import { DoctorComponent } from './doctor/doctor.component';
import { PatientsTableComponent } from './patients-table/patients-table.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';

const routes: Routes = [
  {path:"admin", component:AdminComponent},
  {path:"patient/:IDNum", component:PatientComponent},
  {path: "patients", component:PatientsTableComponent},
  {path:"doctor", component: DoctorComponent},
  {path: "appointments/:IDNum", component: AppointmentListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
