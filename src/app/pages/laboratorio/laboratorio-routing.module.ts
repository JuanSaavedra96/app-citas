import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LaboratorioComponent } from './laboratorio.component';



const routes: Routes = [
  {
    path: '',
    component: LaboratorioComponent,
    //canActivate:[AccesGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaboratorioRoutingModule {}