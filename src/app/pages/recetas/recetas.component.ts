import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.scss'],
})
export class RecetasComponent implements OnInit {

  constructor(private _location: Location,
    public router: Router) { }

  ngOnInit() {}
  regresar(){
    this.router.navigate(['home']);
  }
  detalleReceta(){
    this.router.navigate(['recetas/',1]);
    console.log(this.router.navigate(['recetas/',1]))
  }
}
