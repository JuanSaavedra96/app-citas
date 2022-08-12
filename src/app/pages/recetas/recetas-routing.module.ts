import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecetasComponent } from './recetas.component';



const routes: Routes = [
  {
    path: '',
    component: RecetasComponent,
    //canActivate:[AccesGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecetasRoutingModule {}