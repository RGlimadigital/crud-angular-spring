import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BensmoveisRoutingModule } from './bensmoveis-routing.module';
import { BensmoveisComponent } from './bensmoveis/bensmoveis.component';


@NgModule({
  declarations: [
    BensmoveisComponent
  ],
  imports: [
    CommonModule,
    BensmoveisRoutingModule
  ]
})
export class BensmoveisModule { }
