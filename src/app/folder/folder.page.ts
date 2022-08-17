import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  nombreUsuario:string;

  constructor(private activatedRoute: ActivatedRoute,
    public router: Router) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    let dataLocal = JSON.parse(localStorage.getItem('authorization'));
    this.nombreUsuario = dataLocal.data.nombre;
    console.log(this.nombreUsuario)
  }
  reservarCita(){
    this.router.navigate(['reservar-cita']);
  }
  misRecetas(){
    this.router.navigate(['recetas']);
  }
  citasMedicas(){
    this.router.navigate(['citas-medicas']);
  }
  laboratorio(){
    this.router.navigate(['laboratorio']);
  }
}
