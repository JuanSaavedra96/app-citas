import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginGuard } from 'src/app/guard/login.guard';
import { CitasMedicasComponent } from './citas-medicas.component';
import { DetailCitasComponent } from './detail-citas/detail-citas.component';



const routes: Routes = [
  {
    path: '',
    component: CitasMedicasComponent,
    canActivate:[LoginGuard]
  },
  {
    path: ':id',
    component: DetailCitasComponent,
    canActivate:[LoginGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CitasMedicasRoutingModule {}