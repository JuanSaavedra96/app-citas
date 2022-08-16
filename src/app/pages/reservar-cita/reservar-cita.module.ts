import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservarCitaComponent } from './reservar-cita.component';
import { ReservarCitaRoutingModule } from './reservar-cita-routing.module';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { FinanciadorComponent } from './financiador/financiador.component';
import { ResumenPagoComponent } from './resumen-pago/resumen-pago.component';



@NgModule({
  declarations: [
    ReservarCitaComponent,
    FinanciadorComponent,
    ResumenPagoComponent],
  imports: [
    CommonModule,
    ReservarCitaRoutingModule,
    IonicModule,
    FormsModule
  ]
})
export class ReservarCitaModule { }
