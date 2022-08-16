import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-citas',
  templateUrl: './detail-citas.component.html',
  styleUrls: ['./detail-citas.component.scss'],
})
export class DetailCitasComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {}
  regresar(){
    this.router.navigate(['citas-medicas']);
  }
}
