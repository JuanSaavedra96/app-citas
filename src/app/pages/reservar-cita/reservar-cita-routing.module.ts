import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginGuard } from 'src/app/guard/login.guard';
import { FinanciadorComponent } from './financiador/financiador.component';
import { ReservarCitaComponent } from './reservar-cita.component';
import { ResumenPagoComponent } from './resumen-pago/resumen-pago.component';



const routes: Routes = [
  {
    path: '',
    component: ReservarCitaComponent,
    canActivate:[LoginGuard]
  },
  {
    path: 'financiador',
    component: FinanciadorComponent,
    canActivate:[LoginGuard]
  },
  {
    path: 'pago',
    component: ResumenPagoComponent,
    canActivate:[LoginGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservarCitaRoutingModule {}