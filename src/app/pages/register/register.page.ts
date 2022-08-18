import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormsModule } from '@angular/forms';
import { AlertController, LoadingController, MenuController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  public msg: string;
  public registerForm: FormGroup;

  public name;
  public email;
  public password;
  public phone;
  public surname1;
  public surname2;
  public gender;
  public birthdate
  public documentDigit;
  public documentNumber;
  public dataReniec;
  public genders;
  public documents;
  public registerFormu:boolean = false;
  public dniInvalid = false;
  public sexo;
cambio:boolean = false;
aprobed: boolean = false;
public document;
public _documenType;
public _gender;
  createOk: any;
  digitoVa: boolean;
  hideBox: boolean;
  activateDocumentNumber: boolean;
  documentId: any;
  public datos;
  public idgender;
  public namegender;

  constructor(
                public alertCtrl: AlertController,
                public fb: FormBuilder,
                public loadingCtrl:LoadingController,
                public router: Router,
                private menu : MenuController) {
                  this.menu.enable(false);
                  //this.menu.close('start');
                }

  ngOnInit() {
   
    this.registerForm = this.fb.group({
      name: ['',  [ Validators.required ]],
      surname1: ['',  [ Validators.required ]],
      surname2: ['',  [ Validators.required ]],
      gender: ['',  [ Validators.required ]],
      birthdate: ['',  [ Validators.required ]],
      documentType: ['',  [ Validators.required ]],
      documentNumber: ['',  [ Validators.required]],
      phone: ['',  [ Validators.required, Validators.minLength(9), Validators.maxLength(9) ]],
      email: ['',  [ Validators.required, Validators.email ]],
      password: ['',  [ Validators.required, Validators.minLength(8) ]],
      aprobed: ['', [ Validators.required]],
      documentDigit: ['']
    });
  }

  /* 
  OBTENCIÓN DE GENEROS Y TAMBIEN TIPOD DE DOCUMENTOS DESDE EL XHIS */
  ionViewWillEnter(){
   
  }


    /* ROUTER AL LOGIN
     */
    goToLogin(){
      this.router.navigate(['login']);
      /* this.navCtrl.push(LoginPage); */
    }
  

}
