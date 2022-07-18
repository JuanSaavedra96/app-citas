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
    this.router.navigate(['home']);
  }

  /* 
  NAVEGACION QUE ME ENVIA A LA PAGINA DE REGISTRO */
  registrarUsuario(){
    this.router.navigate(['register']);
  }

  goToHome(){
    this.router.navigate(['home']);
  }

  async goToRecovery(){
    const alert = await this.alertCtrl.create({
      header:"RECUPERAR CONTRASEÑA",
      message:'Ingresa tu correo electronico y te enviaremos un código para recuperar tu cuenta',
      inputs :[
        {
          name:'Email',
          placeholder:'Ingresa tu correo electrónico',
          type: 'text'
        }
      ],
      buttons :[
          {
            text:'Enviar',
            handler: data => {
              console.log('enviando correo electronico');
              let document = data.documento;
              console.log('lo que se almacena en correo:', data);
             /*  const dataSend = {
                documentNumber:  data.documento,
                documentType: {
                  id:"1",
                  name:"D.N.I"
                },
                //app: 'ebooking'
              } */
              //SERVICIO DE ENVIO Y SI SE CONFIRMA TE REDIRECCIONA 
              this.router.navigate(['recovery']);
              console.log("disque enviando correo")
            }
          }
      ]
    });
   await alert.present(); 
  }
}
