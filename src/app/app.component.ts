import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  appPages : any;
  nombreUsuario:string;
  correo:string;
 /*  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders']; */
  constructor(private router:Router) {
    this.sidemenu();
    let dataLocal = JSON.parse(localStorage.getItem('authorization'));
    if(localStorage.getItem('authorization')!=null){
      this.nombreUsuario = dataLocal.data.nombre;
      this.correo = dataLocal.data.dataPersona.correoelectronico;
    }
  }
 
  sidemenu(){
    this.appPages = [
      /* { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
      { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
      { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
      { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
      { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
      { title: 'Spam', url: '/folder/Spam', icon: 'warning' }, */
      {
        title : "Home",
        url   : "/home",
        icon  : "/assets/img/sidemenu/home.svg"
      },
      {
        title : "Mis Citas",
        url   : "/citas-medicas",
        icon  : "/assets/img/sidemenu/miscitas.svg"
      },
      {
        title : "Resultados de Laboratorio",
        url   : "/laboratorio",
        icon  : "/assets/img/sidemenu/resultado.svg"
      },
      {
        title : "Mis Recetas",
        url   : "/recetas",
        icon  : "/assets/img/sidemenu/misrecetas.svg"
      },
      {
        title : "Mis Familiares",
        url   : "/dependientes",
        icon  : "/assets/img/sidemenu/misfamiliares.svg"
      },
      /* {
        title : "Beneficios",
        url   : "/beneficios",
        icon  : "heart"
      },  {
        title : "Cerrar Sesion",
        url   : "/login",
        icon  : "/assets/img/sidemenu/cerrarsesion.svg"
      }, */
    ];
  }
  closeSession(){
    localStorage.clear();
    /* this.autho.getKey().subscribe( (data:any) =>{
      localStorage.setItem('authorization', data.authorization );
      localStorage.setItem('role', data.role);
    })  */
    this.router.navigate(['/login']);
    //this.menu.close('start');
    console.log('cerrar sesión');
}
}
