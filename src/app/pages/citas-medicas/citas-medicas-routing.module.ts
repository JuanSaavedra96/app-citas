import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CitasMedicasComponent } from './citas-medicas.component';
import { DetailCitasComponent } from './detail-citas/detail-citas.component';



const routes: Routes = [
  {
    path: '',
    component: CitasMedicasComponent,
    //canActivate:[AccesGuard]
  },
  {
    path: ':id',
    component: DetailCitasComponent,
    //canActivate:[AccesGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CitasMedicasRoutingModule {}