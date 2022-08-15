import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-receta',
  templateUrl: './detail-receta.component.html',
  styleUrls: ['./detail-receta.component.scss'],
})
export class DetailRecetaComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {}
  regresar(){
    this.router.navigate(['recetas']);
  }
}
