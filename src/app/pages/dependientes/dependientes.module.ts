import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DependientesComponent } from './dependientes.component';
import { DependientesRoutingModule } from './dependientes-routing.module';



@NgModule({
  declarations: [DependientesComponent],
  imports: [
    CommonModule,
    DependientesRoutingModule
  ]
})
export class DependientesModule { }
