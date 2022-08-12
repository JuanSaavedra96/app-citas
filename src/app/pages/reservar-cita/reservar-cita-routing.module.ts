import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReservarCitaComponent } from './reservar-cita.component';



const routes: Routes = [
  {
    path: '',
    component: ReservarCitaComponent,
    //canActivate:[AccesGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservarCitaRoutingModule {}