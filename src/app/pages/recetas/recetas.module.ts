import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecetasRoutingModule } from './recetas-routing.module';
import { RecetasComponent } from './recetas.component';
import { DetailRecetaComponent } from './detail-receta/detail-receta.component';



@NgModule({
  declarations: [
    RecetasComponent,
  DetailRecetaComponent],
  imports: [
    CommonModule,
    RecetasRoutingModule
  ]
})
export class RecetasModule { }
