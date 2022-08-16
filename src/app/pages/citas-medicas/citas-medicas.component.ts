import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-citas-medicas',
  templateUrl: './citas-medicas.component.html',
  styleUrls: ['./citas-medicas.component.scss'],
})
export class CitasMedicasComponent implements OnInit {
  type: string='proximas';
  constructor(private _location: Location,
    public router: Router) { }

  ngOnInit() {}
  regresar(){
    this.router.navigate(['home']);
  }
  segmentChanged(ev: any) {
    console.log( ev.detail.value);
    this.type=ev.detail.value;
  }
  detalleCita(){
    this.router.navigate(['citas-medicas/',1]);
  }
}
