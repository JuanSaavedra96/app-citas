import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-laboratorio',
  templateUrl: './laboratorio.component.html',
  styleUrls: ['./laboratorio.component.scss'],
})
export class LaboratorioComponent implements OnInit {

  constructor(private _location: Location,
    public router: Router) { }

  ngOnInit() {}
  regresar(){
    this.router.navigate(['home']);
  }
}
