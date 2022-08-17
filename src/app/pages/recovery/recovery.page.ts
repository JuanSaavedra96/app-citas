import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, LoadingController, MenuController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';


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
  public recoveryData;
  public dataSend;
  public primero;
  public segundo;
  public tercero;
  public cuarto;
  constructor(public router: Router,
              public form:        FormBuilder,
              public alertCtrl: AlertController,
              public loadingCtrl : LoadingController,
              public routes: ActivatedRoute,
              private menu: MenuController) {      
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
    /* console.log(form)
    let datos = {
      code:`${this.primero}${this.segundo}${this.tercero}${this.cuarto}`,
      documentType: this.dataSend.documentType,
      dni:this.dataSend.documentNumber,
      id:this.recoveryData.id,
      password:this.formCode.value.password
    } */
    this.goToLogin();
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
