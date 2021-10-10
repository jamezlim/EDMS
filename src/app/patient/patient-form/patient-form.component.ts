import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';
import { FormBuilder } from '@angular/forms'
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { CanComponentDeactivate } from '../../shared/services/can-deactivate-guard.service'


@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.css']
})
export class PatientFormComponent implements OnInit, CanComponentDeactivate {

  constructor(private datePipe : DatePipe, private formBuilder : FormBuilder, private matIconRegistry : MatIconRegistry, private domSanitizer : DomSanitizer ){
    this.matIconRegistry.addSvgIcon('woman-color', domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/woman.svg'));
  }
  today : Date = new Date();
  isOpen : boolean;
  @ViewChild(MatAccordion) accordion: MatAccordion;

  ngOnInit(): void {
    this.isOpen = true;
    this.today = new Date();
  }


  patientInfoForm = this.formBuilder.group({
    VisitDate : [this.datePipe.transform(new Date(), 'MM/dd/yyyy HH:mm')],
    DueDate : [this.today],
    HandleWith : [],
    Name : [],
    Gender : [],
    DOB : [],
    Address : [],
    Cell : [],
    Home : [],
    Email : [],
    Insurance : [],
    InsuranceId : [],
    CompanyName : []
  });
  
  submitPatientInfoForm(){
    
  }

  confirmExit() {
    return confirm("Sure to exit?");
  }

  
}
