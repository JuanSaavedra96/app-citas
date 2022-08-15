import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailRecetaComponent } from './detail-receta/detail-receta.component';
import { RecetasComponent } from './recetas.component';



const routes: Routes = [
  {
    path: '',
    component: RecetasComponent,
    //canActivate:[AccesGuard]
  },
  {
    path: ':id',
    component: DetailRecetaComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecetasRoutingModule {}