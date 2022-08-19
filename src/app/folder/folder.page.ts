import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  nombreUsuario:string;
  correo:string;

  constructor(private activatedRoute: ActivatedRoute,
    public router: Router,
    private menu:MenuController) {
      this.menu.enable(true);
     }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    let dataLocal = JSON.parse(localStorage.getItem('authorization'));
    this.nombreUsuario = dataLocal.data.nombre;
    this.correo = dataLocal.data.dataPersona.correoelectronico;
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
