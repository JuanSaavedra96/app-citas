import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginGuard } from 'src/app/guard/login.guard';
import { LaboratorioComponent } from './laboratorio.component';



const routes: Routes = [
  {
    path: '',
    component: LaboratorioComponent,
    canActivate:[LoginGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaboratorioRoutingModule {}