import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DependientesComponent } from './dependientes.component';



const routes: Routes = [
  {
    path: '',
    component: DependientesComponent,
    //canActivate:[AccesGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DependientesRoutingModule {}