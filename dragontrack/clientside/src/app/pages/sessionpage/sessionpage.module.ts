import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionpageComponent } from './sessionpage.component';
import { TrackinfoComponent } from './trackinfo/trackinfo.component';

@NgModule({
  declarations: [SessionpageComponent, TrackinfoComponent],
  imports: [
    CommonModule    
  ],
  providers: [

  ]
})
export class sessionpagemodule { }
