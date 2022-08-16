import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-financiador',
  templateUrl: './financiador.component.html',
  styleUrls: ['./financiador.component.scss'],
})
export class FinanciadorComponent implements OnInit {
  disabledBtnPrincipal:boolean=false; //Eventos al seleccionar para quien es la cita
  disabledBtnFinanc:boolean=false;    //Eventos al seleccionar financiador
  constructor(private router: Router) { }

  ngOnInit() {}
  regresar(){
    this.router.navigate(['home']);
  }
  seleccionarCita(){
    this.disabledBtnPrincipal=true;
  }
  seleccionarFinanciador(){
    if(this.disabledBtnFinanc==false){
      this.disabledBtnFinanc=true;
    }else{
      this.disabledBtnFinanc=false;
    }
    console.log(this.disabledBtnFinanc)
  }
  gotoPago(){
    this.router.navigate(['reservar-cita/pago']);
  }
}
