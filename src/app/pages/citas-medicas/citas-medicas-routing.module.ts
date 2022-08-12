import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CitasMedicasComponent } from './citas-medicas.component';



const routes: Routes = [
  {
    path: '',
    component: CitasMedicasComponent,
    //canActivate:[AccesGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CitasMedicasRoutingModule {}