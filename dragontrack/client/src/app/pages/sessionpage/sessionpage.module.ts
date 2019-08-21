import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionpageComponent } from './sessionpage.component';
import { NexttrackComponent } from './nexttrack/nexttrack.component';
import { CurrenttrackComponent } from './currenttrack/currenttrack.component';
import { UploadfileComponent } from './uploadfile/uploadfile.component';

@NgModule({
  declarations: [SessionpageComponent, NexttrackComponent, CurrenttrackComponent, UploadfileComponent],
  imports: [
    CommonModule    
  ],
  providers: [

  ]
})
export class sessionpagemodule { }
