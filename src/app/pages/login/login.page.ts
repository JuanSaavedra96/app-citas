import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { EndpointService } from 'src/app/services/endpoint.service';

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
  public mostrar_ocultar:boolean=false;
  constructor(
    public alertCtrl: AlertController,
    public modalCtrl: ModalController,
    public loading: LoadingController,
    public router: Router,
    public newsSrv:EndpointService) { 
     
        
    }

  ngOnInit() {

  }

  ionViewWillEnter(){
  }
  
  /* 
  FUNCIÓN PARA LOGIN */
  startSesion(){
    //this.router.navigate(['home']);
    this.newsSrv.newLoginWithDni(this.dni).subscribe((data:any) => {
      console.log('data:', data);
      /* this.msg = "";
      localStorage.setItem('authorization', JSON.stringify(data));
      localStorage.setItem('name', data.name);
      localStorage.setItem('visto', 'ok');
      this.router.navigate(['home']);
      this.documentId = null;
      this.dni = "";
      this.password = ""; */
    }, async err =>{
      console.log(err);
      this.msg = err.error.message;
      const alert = await this.alertCtrl.create({
        header: 'Error de Login',
        message: `${this.msg}`,
        buttons: ['Volver a intentar']
      });
      await alert.present();
    });
  }

  startSesion1(){
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

  mostrarContrasena(){
    var tipo = document.getElementById("password") as HTMLInputElement | null;;
    if(tipo.type == "password"){
        tipo.type = "text";
        this.mostrar_ocultar=true;
    }else{
        tipo.type = "password";
        this.mostrar_ocultar=false;
    }
  }
}
