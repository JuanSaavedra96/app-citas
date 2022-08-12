import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dependientes',
  templateUrl: './dependientes.component.html',
  styleUrls: ['./dependientes.component.scss'],
})
export class DependientesComponent implements OnInit {

  constructor(private _location: Location,
    public router: Router) { }

  ngOnInit() {}
  regresar(){
    this.router.navigate(['home']);
  }
}
