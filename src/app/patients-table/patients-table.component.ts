import { Component, OnInit } from '@angular/core';
import { PatientsService } from '../patients.service';

@Component({
  selector: 'app-patients-table',
  templateUrl: './patients-table.component.html',
  styleUrls: ['./patients-table.component.css']
})
export class PatientsTableComponent implements OnInit {
    patients
    nullValue ="nullValue"
  constructor(public patientsTableService: PatientsService) {
    this.patients = this.patientsTableService.getPatients(this.nullValue)
   }
    
  ngOnInit() {
  }

}
