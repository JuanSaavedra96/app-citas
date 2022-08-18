import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginGuard } from 'src/app/guard/login.guard';
import { DependientesComponent } from './dependientes.component';



const routes: Routes = [
  {
    path: '',
    component: DependientesComponent,
    canActivate:[LoginGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DependientesRoutingModule {}