import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DependientesComponent } from './dependientes.component';
import { DependientesRoutingModule } from './dependientes-routing.module';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [DependientesComponent],
  imports: [
    CommonModule,
    DependientesRoutingModule,
    IonicModule.forRoot()
  ]
})
export class DependientesModule { }
