import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public msg;
  public pageFrom;
  public hora;
  public doctor;
  public available;
  public authPublic;
  public change = false;
  public datos;
  public password;
  public documents: Object[] = [];
  public document: number = null;
  public dni: string ;
  public typeDocument ;
  public documentId ;
  constructor(
    public alertCtrl: AlertController,
    public modalCtrl: ModalController,
    public loading: LoadingController,
    public router: Router) { 
     
        
    }

  ngOnInit() {

  }

  ionViewWillEnter(){
  }
  
  /* 
  FUNCIÓN PARA LOGIN */
  startSesion(){
  }

  /* 
  NAVEGACION QUE ME ENVIA A LA PAGINA DE REGISTRO */
  registrarUsuario(){
    this.router.navigate(['register']);
  }

  goToHome(){
    this.router.navigate(['home']);
  }
}
