import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaboratorioComponent } from './laboratorio.component';
import { LaboratorioRoutingModule } from './laboratorio-routing.module';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [LaboratorioComponent],
  imports: [
    CommonModule,
    LaboratorioRoutingModule,
    IonicModule.forRoot()
  ]
})
export class LaboratorioModule { }
