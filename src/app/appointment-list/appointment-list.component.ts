import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { PatientsService } from '../patients.service';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {
  appointment
  addAppointmentBoolean 
  patientAppointment
  patient
  patientID
  patientLastName
  patientFirstName
  patientAge
  patientApppointmentExists = false
  
  constructor(public route: ActivatedRoute, public appointmentsService: PatientsService ) {
    console.log( "my ID = " + this.patientID)
    console.log("my Parameter = ")
    this.patientAppointment = this.appointmentsService.getAppointments(this.patientID)
  }

  addAppointment(){
    this.addAppointmentBoolean = true
  }

  saveAppointment(IDNum, lastName, firstName, age, appointmentDate, dateAppointmentSet, appointmentDoctor){
    this.appointmentsService.addAppointment(IDNum, lastName, firstName, age, appointmentDate, dateAppointmentSet, appointmentDoctor)
    console.log("this.patientID = " + this.patientID)

    console.log("++++++ Checking if all parameters (7) exist   ++++++")
    console.log("1. this.IDNum = " + IDNum)
    console.log("2. this.lastName = " + lastName) 
    console.log("3. this.firstName = " + firstName)
    console.log("4. this.age = " + age)
    console.log("5. this.appointment = " + appointmentDate)
    console.log("6. this.dateAppointmentSet = " + dateAppointmentSet)
    console.log("7. this.appointDoctor = " + appointmentDoctor)
    console.log(this.appointmentsService.addAppointment)
    this.patientApppointmentExists = true
    this.ngOnInit()
  }
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.patientID = params.get('IDNum');
      console.log(params);
      console.log(this.route);
      console.log("routeLink 1: " + this.patientID)
      if(this.appointmentsService.getAppointments(this.patientID)!= undefined){
        this.patientAppointment = this.appointmentsService.getAppointments(this.patientID)
      }
      this.appointment = this.appointmentsService.getAppointments(this.patientID)

        this.patient = this.appointmentsService.getPatients(this.patientID)
        console.log(this.patient)
        this.appointmentsService.checkSize()
      if(this.appointmentsService.getAppointments(this.patientID)!= undefined){
        this.patientAppointment = this.appointmentsService.getAppointments(this.patientID)
        
      }
      if(!this.appointmentsService.getAppointments(this.patientID)){
        return null
        
      }
      console.log(this.patientAppointment)
      console.log( "my ID number 5 = " + this.patientID)
      
      console.log("My patient " + this.patient.IDNum)

    
      
    })
  }
}
