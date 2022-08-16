import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservar-cita',
  templateUrl: './reservar-cita.component.html',
  styleUrls: ['./reservar-cita.component.scss'],
})
export class ReservarCitaComponent implements OnInit {
  especialidad:string="";
  dia:string="";
  constructor(private router: Router) { }

  ngOnInit() {}
  regresar(){
    this.router.navigate(['home']);
  }
  valor(){
    console.log(this.especialidad)
  }
  seleccionarDia(){
    this.dia="01";
  }
  seleccionarHorario(){
    this.router.navigate(['reservar-cita/financiador']);
  }
}
