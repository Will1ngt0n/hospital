import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
import { PatientsService } from '../patients.service';
import { PatientComponent } from '../patient/patient.component';
import { query } from '@angular/animations';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  patientAddForm
  patientsArray
  stringPattern= "([A-Z])(?=.*\[a-z]).{3,}"
  numberPattern = "([0-9]+)"
  firstName = ""
  lastName = ""
  age = ""
  IDNumber= ""
  contactNumber 
  patientPosition = 0
  positionArray
  continue = false

  findItem
  searched
  nullValue: string = "nullValue"
  
   
  /** Adding form control constructor */
  constructor(public formBuilder : FormBuilder, public patientsList : PatientsService) {
    this.searched = this.patientsList.allowSearch() 
    /** array */
    this.patientsArray = patientsList.getPatients(this.nullValue)
    this.continue = patientsList.stopAOverloading()
    console.log(this.nullValue)
    console.log("dddd")
    
    /** form validation */
    this.patientAddForm = formBuilder.group({
      firstName:["",Validators.compose(
        [Validators.required, Validators.pattern(this.stringPattern)]
      )],
      lastName:["", Validators.compose(
        [Validators.required, Validators.pattern(this.stringPattern)]
      )],
      age:["",Validators.compose(
        [Validators.required, Validators.min(0), Validators.maxLength(2),Validators.pattern(this.numberPattern)]
      )],
      IDNumber:["",Validators.compose(
        [Validators.required, Validators.minLength(13), Validators.maxLength(13), Validators.pattern(this.numberPattern)]  /**              */
      )],
      contactNumber:["", Validators.compose(
        [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(this.numberPattern)]
      )]
    })
  }

  /**                                                    LOCAL FUNCTIONS                                                      */
   /** Adding service constructor */
   serviceConstructor(){

   }
   addPatient(firstName, lastName, age, IDNumber, contactNumber){

    /** this.patientsList.newFirstName = this.firstName
     this.patientsList.newLastName = this.lastName
     this.patientsList.newAge = this.age
     this.patientsList.newID = this.IDNumber   */
     
      this.patientsList.addPatients(firstName, lastName, age, IDNumber, contactNumber);

      this.clearFn();
    /** Adding a patient counter, to count the number of added patients
     * this.patientPosition = +this.patientPosition + 1
     * this.positionArray.push(this.patientPosition)
     */


     

     
   }

   clearFn() {
    this.IDNumber = '';
    this.firstName = '';
    this.lastName = '';
    this.age = '';
    this.contactNumber = '';
   }

   inputIDFn(IDNumber){

    
     /** Checking if ID alreaady exists */
      let searchKey = IDNumber
     let i = 0
     for(i=0;i<this.patientsArray.length; i++){
        if(searchKey===this.patientsArray[i].IDNum){
          this.continue = false
          return this.continue
        }
        else if(searchKey != this.patientsArray[i].IDNum){
          this.continue =true
          return this.continue
        }
     }
      
   }





   searchFn(x){
      const i = this.patientsArray.indexOf(x);
      this.findItem = this.patientsArray[i].IDNum;
      this.patientsList.searchFor = this.findItem;
   /** this.patientsList.allowSearch()
    *  return this.findItem
    * this.searched = this.patientsList.searchFor
    */

      this.patientsList.allowSearch();







   }

  ngOnInit() {
  }

}
