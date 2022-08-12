import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaboratorioComponent } from './laboratorio.component';
import { LaboratorioRoutingModule } from './laboratorio-routing.module';



@NgModule({
  declarations: [LaboratorioComponent],
  imports: [
    CommonModule,
    LaboratorioRoutingModule
  ]
})
export class LaboratorioModule { }
