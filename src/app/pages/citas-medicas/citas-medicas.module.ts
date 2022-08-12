import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CitasMedicasRoutingModule } from './citas-medicas-routing.module';
import { CitasMedicasComponent } from './citas-medicas.component';



@NgModule({
  declarations: [CitasMedicasComponent],
  imports: [
    CommonModule,
    CitasMedicasRoutingModule
  ]
})
export class CitasMedicasModule { }
