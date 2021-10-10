import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  today : Date;

  constructor( private matIconRegistry : MatIconRegistry, private domSanitizer : DomSanitizer ){
    this.today = new Date();
    this.matIconRegistry.addSvgIcon('glasses', domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/sun-glasses.svg'));
  }

  ngOnInit(): void {
  }

}
