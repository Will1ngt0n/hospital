import { Injectable } from '@angular/core';
import { AdminComponent } from './admin/admin.component';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {
  /** Patients array */
  patients = []
  search = []
  appointment = []
  appointments= [
    {
      patientName: "why",
      patientSurname: "why",
      patientID: "4545343234543",
      patientAge: "why",
     
    },
    {
      patientName: "whrnjrh",
      patientSurname: "why",
      patientID: "4545343234543",
      patientAge: "why",
 
    }
  ]
  /** Varriables to take new patient controls */
  newFirstName: string =""
  newLastName: string = ""
  newAge: string = ""
  newID: string =""

  noAppointmentMessage
  /** declaring wuery variables */
  searchFor: string = "960803"
  IDString
  allowed = true

  searchArray(){
    /**
     * 
     * Try to add a custom iterable array search method that accepts parameters, so you dont have to individually through arrays with a new method
     * 
     * 
     * 
     * 
     * 
     * 
     */
  }
  getPatients(query){
    let i = 0;
    
    for(i = 0; i < this.patients.length; i++){
      if(query===this.patients[i].IDNum){
        return this.patients[i]
      }
    }
    if(query === "nullValue"){
    return this.patients
    }
    
  }

  /** Getting selected patient's appointments */
  getAppointments(query){
    let i = 0;
    
    for(i = 0; i < this.appointment.length; i++){
      if(query===this.appointment[i].patientID){
        return this.appointment[i]
      }
    }

    
  }
  checkSize(){
    if(this.appointment.length > 0){
      return alert("Added")
    }
  }
  addAppointment(newPatientID, newPatientLastName, newPatientName, newPatientAge, newAppointmentDate, newDateAppointmentSet, newAppointDoctor){
    this.appointment.push(
      {patientID: newPatientID,
      patientSurname: newPatientLastName,
      patientName: newPatientName,
      patientAge: newPatientAge,
      appointmentDate: newAppointmentDate,
      dateAppointmentSet: newDateAppointmentSet,
      appointmentDoctor: newAppointDoctor})
  }


   /**
   * 
   *addAppointment(IDNum, lastName, firstName, age, appointmentDate, dateAppointmentSet, appointmentDoctor){
    this.appointment.push(
      {patientID: IDNum,
      patientSurname: lastName,
      patientName: firstName,
      patientAge: age,
      appointmentDate: appointmentDate,
      dateAppointmentSet: dateAppointmentSet,
      appointmentDoctor: appointmentDoctor}
      )
  }
   */




  addPatients(newFirstName, newLastName, newAge, newIDNumber, newNumber){
    this.patients.push(
      {firstName: newFirstName,
        lastName: newLastName,
        age: newAge,
        IDNum: newIDNumber,
        contactNumber: newNumber}
    )
  }

  allowSearch(){
    /** */
     return this.searchFor
  }

  stopAOverloading(){
    let i = 0
    for(i=0; i <this.patients.length; i++){
      if(this.IDString==this.patients[i].IDNum){
        return !this.allowed
      }
    }
    
  }
  constructor() { }
}
