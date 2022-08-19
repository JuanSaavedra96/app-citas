import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController, LoadingController, MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { userService } from 'src/app/services/user.service';

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
    public newsSrv:userService,
    private menu:MenuController) {
      this.menu.enable(false);
     }

  ngOnInit() {

  }

  ionViewWillEnter(){
  }
  
  /* 
  FUNCIÓN PARA LOGIN */
  startSesion(){
    //this.router.navigate(['home']);
    this.newsSrv.newLoginWithDni(this.dni,this.password).subscribe((data:any) => {
      console.log('data:', data.data);
      console.log('data:', data.data.nombre);
      /*localStorage.setItem('authorization', JSON.stringify(data));
      localStorage.setItem('visto', 'ok');
      this.documentId = null;*/
      localStorage.setItem('authorization', JSON.stringify(data));
      localStorage.setItem('nombre', data.data.nombre);
      this.msg = "";
      this.dni = "";
      this.password = "";  
      this.router.navigate(['home']);
    }, async err =>{
      console.log(err);
      this.msg = err.error.error;
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
      subHeader:"RECUPERAR CONTRASEÑA",
      cssClass:'headerRecovery',
      message:'Ingresa tu DNI y te enviaremos un código a tu para recuperar tu cuenta',
      inputs :[
        {
          name:'usuario',
          placeholder:'Ingresa tu DNI',
          type: 'tel'
        }
      ],
      buttons :[
          {
            text:'Enviar',
            handler: data => {
              console.log('enviando correo electronico');
              let document = data;
              console.log('lo que se almacena en correo:', data);
             /*  const dataSend = {
                documentNumber:  data.documento,
                documentType: {
                  id:"1",
                  name:"D.N.I"
                },
                //app: 'ebooking'
              } */
              this.newsSrv.recoveryLogin(document).subscribe(data =>{
                this.datos = data;
                console.log('this.datos:', this.datos);
                console.log('this.datos:',data);
                this.newsSrv.dataSend = document; //ALMACENA EL DNI DEL USUARIO
                this.router.navigate(['recovery']);
            }, async err =>{
              console.log(err.status);
              if(err.status==400){
                const alert = await this.alertCtrl.create({
                  header: 'Atención',
                  //subHeader: '',
                  message: '¡DNI no encontrado!',
                  buttons: ['OK'],
                });
            
                await alert.present();
              }
            })
            }
          }
      ]
    });
   await alert.present(); 
  }
  async dniError() {
    const alert = await this.alertCtrl.create({
      header: 'Atención',
      //subHeader: '',
      message: '¡DNI no encontrado!',
      buttons: ['OK'],
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
