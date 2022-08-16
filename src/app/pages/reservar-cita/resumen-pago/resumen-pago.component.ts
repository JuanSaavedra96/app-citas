import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resumen-pago',
  templateUrl: './resumen-pago.component.html',
  styleUrls: ['./resumen-pago.component.scss'],
})
export class ResumenPagoComponent implements OnInit {
  mostrarPagoOnline:boolean=true;
  constructor() { }

  ngOnInit() {}
  pagoOnline(){
    if(this.mostrarPagoOnline==true){
      this.mostrarPagoOnline=false
    }else{
      this.mostrarPagoOnline=true
    }
  }
}
