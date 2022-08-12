import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeneficiosRoutingModule } from './beneficios-routing.module';
import { BeneficiosComponent } from './beneficios.component';



@NgModule({
  declarations: [BeneficiosComponent],
  imports: [
    CommonModule,
    BeneficiosRoutingModule
  ]
})
export class BeneficiosModule { }
