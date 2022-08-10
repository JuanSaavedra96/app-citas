import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  appPages : any;
  
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {
    this.sidemenu();
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
        icon  : "home"
      },
      {
        title : "Mis Citas",
        url   : "/home",
        icon  : "home"
      },
      {
        title : "Resultados de Laboratorio",
        url   : "/home",
        icon  : "home"
      },
      {
        title : "Mis Recetas",
        url   : "/home",
        icon  : "home"
      },
      {
        title : "Mis Familiares",
        url   : "/home",
        icon  : "home"
      },
      {
        title : "Beneficios",
        url   : "/home",
        icon  : "home"
      },
      {
        title : "Cerrar Sesion",
        url   : "/login",
        icon  : "home"
      },
    ];
  }
}
