import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeneficiosRoutingModule } from './beneficios-routing.module';
import { BeneficiosComponent } from './beneficios.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [BeneficiosComponent],
  imports: [
    CommonModule,
    BeneficiosRoutingModule,
    IonicModule.forRoot()
  ]
})
export class BeneficiosModule { }
