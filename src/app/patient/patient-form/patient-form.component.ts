import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {MatAccordion} from '@angular/material/expansion';


@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.css']
})
export class PatientFormComponent implements OnInit {
  constructor(){}
  Today : Date;
  isOpen : boolean;
  @ViewChild(MatAccordion) accordion: MatAccordion;

  ngOnInit(): void {
    this.isOpen = true;
    var title = "Patient Form";
    // this.Today = new Date();
  }


  patientInfoForm = new FormGroup({ 
    Name : new FormControl(''), 
    Gender : new FormControl(''),
    DOB : new FormControl(''),
    Address : new FormControl(''),
    Cell : new FormControl(''),
    Home : new FormControl(''),
    Email : new FormControl(''),
    Insurance : new FormControl(''),
    InsuranceId : new FormControl(''),
    CompanyName : new FormControl(''),
  });
}
