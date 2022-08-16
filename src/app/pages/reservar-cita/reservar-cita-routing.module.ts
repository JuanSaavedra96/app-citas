import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FinanciadorComponent } from './financiador/financiador.component';
import { ReservarCitaComponent } from './reservar-cita.component';
import { ResumenPagoComponent } from './resumen-pago/resumen-pago.component';



const routes: Routes = [
  {
    path: '',
    component: ReservarCitaComponent,
    //canActivate:[AccesGuard]
  },
  {
    path: 'financiador',
    component: FinanciadorComponent,
    //canActivate:[AccesGuard]
  },
  {
    path: 'pago',
    component: ResumenPagoComponent,
    //canActivate:[AccesGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservarCitaRoutingModule {}