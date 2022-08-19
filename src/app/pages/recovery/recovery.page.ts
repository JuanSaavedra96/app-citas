import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, LoadingController, MenuController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { userService } from 'src/app/services/user.service';


@Component({
  selector: 'app-recovery',
  templateUrl: './recovery.page.html',
  styleUrls: ['./recovery.page.scss'],
})
export class RecoveryPage implements OnInit {

  public datos;
  public formCode: FormGroup;
  public code;
  public logeo;
  public primero;
  public segundo;
  public tercero;
  public cuarto;
  public dataSend;
  constructor(public router: Router,
              public form:        FormBuilder,
              public alertCtrl: AlertController,
              public loadingCtrl : LoadingController,
              public routes: ActivatedRoute,
              private menu: MenuController,
              private userService : userService
              ) {      
                this.formCode = this.form.group({
                  primero : [],
                  segundo : [],
                  tercero : [],
                  cuarto  : [],
                  password   : ['', [Validators.required]],
                  passwordRepeat   : ['', [Validators.required]]
              });
              
                  this.menu.enable(false);
               }

  ngOnInit() {
    this.dataSend = this.userService.dataSend;
    console.log(this.dataSend.usuario)
  }

  /* 
  VALIDACIÓN DE QUE LOS PASSWORDS INGRESADOS SEAN IGUALES */
  validacion(){
    const valid = this.formCode.value;
    if(valid.password == valid.passwordRepeat){
      return true;
    }else{
      return false;
    }
  }

  /* 
  FUNCIÓN PARA SALVAR LOS DATOS DE RECUPERACIÓN SE COMBINAN CON LOS DATOS OBTENIDOS EN LA SOLICITUD */
  saveData(form){
    const code = `${this.primero}${this.segundo}${this.tercero}${this.cuarto}`;
    let datos = {
      usuario:this.dataSend.usuario,
      clave:this.formCode.value.password,
      codigo: code.toUpperCase()
    }
    console.log(datos)
    this.userService.loginRecovery(datos).subscribe(data => {
      console.log(data)
      this.logeo = data;
      if(data){
            console.log('this.logeo:', this.logeo);
            this.recoverySuccess();
            this.router.navigate(['login']);
      } 
    },err =>{
      console.log('el logeo:', this.logeo, err);
      this.logeo = err;
        this.erroCode();
    });
    //this.goToLogin();
}

async recoverySuccess(){
  const alert = await this.alertCtrl.create({
    header:"Cuenta recuperada",
    message:"su cuenta se ha recuperado exitosamente, ahora haga login",
    buttons: [
      {
        text:'ok'
      }
    ]
  })
  await alert.present();
}

/* 
MANEJO DE ERROR DE PROBLEMA DE RECUPERACION */
async erroCode(){
  const alert = await this.alertCtrl.create({
    header:`Error en la recuperación`,
    message:`${this.logeo.error.message}`,
    buttons: ['volver a intentar']
  });
  await alert.present();
}

goToLogin(){
  this.router.navigate(['login']);
  /* this.navCtrl.setRoot(LoginPage); */
}
}
