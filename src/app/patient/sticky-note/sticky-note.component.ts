import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sticky-note',
  templateUrl: './sticky-note.component.html',
  styleUrls: ['./sticky-note.component.css']
})
export class StickyNoteComponent implements OnInit {

  @Input() patientName : string; 
  @Input() patientDOB : string; 
  @Input() patientInsurance : string; 
  @Input() isNew : boolean;
  type : Type;
  Type;
  constructor() { }

  ngOnInit(): void {
    this.type = Type.Glasses;
    this.Type = Type;
  }

  onClickTypeButton(){
    this.type = (this.type +1) % Type.length;
  }
  
}

enum Type {
  'Glasses' = 0,
  'Contacts' = 1,
  'Routine' = 2,
  'Medical' =3,
  'length' = 4
}

