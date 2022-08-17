import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resumen-pago',
  templateUrl: './resumen-pago.component.html',
  styleUrls: ['./resumen-pago.component.scss'],
})
export class ResumenPagoComponent implements OnInit {
  mostrarPagoOnline:boolean=true;
  constructor(private router:Router) { }

  ngOnInit() {}
  regresar(){
    this.router.navigate(['home']);
  }
  pagoOnline(){
    if(this.mostrarPagoOnline==true){
      this.mostrarPagoOnline=false
    }else{
      this.mostrarPagoOnline=true
    }
  }
}
