import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-beneficios',
  templateUrl: './beneficios.component.html',
  styleUrls: ['./beneficios.component.scss'],
})
export class BeneficiosComponent implements OnInit {

  constructor(private _location: Location,
    public router: Router) { }

  ngOnInit() {}
  regresar(){
    this.router.navigate(['home']);
  }
}
