import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginGuard } from 'src/app/guard/login.guard';
import { DetailRecetaComponent } from './detail-receta/detail-receta.component';
import { RecetasComponent } from './recetas.component';



const routes: Routes = [
  {
    path: '',
    component: RecetasComponent,
    canActivate:[LoginGuard]
  },
  {
    path: ':id',
    component: DetailRecetaComponent,
    canActivate:[LoginGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecetasRoutingModule {}