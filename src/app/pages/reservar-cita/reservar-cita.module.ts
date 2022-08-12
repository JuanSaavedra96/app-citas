import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservarCitaComponent } from './reservar-cita.component';
import { ReservarCitaRoutingModule } from './reservar-cita-routing.module';



@NgModule({
  declarations: [ReservarCitaComponent],
  imports: [
    CommonModule,
    ReservarCitaRoutingModule
  ]
})
export class ReservarCitaModule { }
