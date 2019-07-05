import { Component, OnInit } from '@angular/core';
import { PatientsService } from '../patients.service';
import { AdminComponent } from '../admin/admin.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  patients= []
  queried: boolean = false;
  queryKey: string = "nullValue"
  hospital
  
  
  constructor(public patientArray : PatientsService, public route: ActivatedRoute) { 
    /**
     * this.patients = patientArray.allowSearch()
     */
      console.log(this.queryKey)
      this.queryKey = this.patientArray.allowSearch()
      
      console.log(this.queryKey)
     /**this.patients = this.patientArray.getPatients() */ 
   
  }
  
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.queryKey = params.get('IDNum');
      console.log()
      console.log(params)
      console.log(this.route)
      console.log( "routeLink: " + this.queryKey)
      this.patients = this.patientArray.getPatients(this.queryKey)
      console.log(this.patients)
    })
  }

}
