import { CanDeactivateGuard } from './services/can-deactivate-guard.service';
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers: [
    DatePipe,
    CanDeactivateGuard
  ],
  exports : [
  ]
})
export class SharedModule { }
