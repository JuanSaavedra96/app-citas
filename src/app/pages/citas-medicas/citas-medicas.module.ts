import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CitasMedicasRoutingModule } from './citas-medicas-routing.module';
import { CitasMedicasComponent } from './citas-medicas.component';
import { IonicModule } from '@ionic/angular';
import { DetailCitasComponent } from './detail-citas/detail-citas.component';



@NgModule({
  declarations: [
    CitasMedicasComponent,
  DetailCitasComponent],
  imports: [
    CommonModule,
    CitasMedicasRoutingModule,
    IonicModule.forRoot()
  ]
})
export class CitasMedicasModule { }
