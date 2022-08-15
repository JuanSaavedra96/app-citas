import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-mdl-create-dependiente',
  templateUrl: './mdl-create-dependiente.component.html',
  styleUrls: ['./mdl-create-dependiente.component.scss'],
})
export class MdlCreateDependienteComponent implements OnInit {
  public msg: string;
  public registerForm: FormGroup;

  public name;
  public email;
  public parentesco;
  public surname1;
  public surname2;
  public gender;
  public birthdate
  public documentDigit;
  public documentNumber;
  public genders;
  public dniInvalid = false;
  public sexo;
  aprobed: boolean = false;
  constructor(private modalCtrl: ModalController,
    public fb: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      name: ['',  [ Validators.required ]],
      surname1: ['',  [ Validators.required ]],
      surname2: ['',  [ Validators.required ]],
      gender: ['',  [ Validators.required ]],
      birthdate: ['',  [ Validators.required ]],
      documentType: ['',  [ Validators.required ]],
      documentNumber: ['',  [ Validators.required]],
      parentesco: ['',  [ Validators.required]],
      //phone: ['',  [ Validators.required, Validators.minLength(9), Validators.maxLength(9) ]],
      email: ['',  [ Validators.required, Validators.email ]],
      aprobed: ['', [ Validators.required]],
      documentDigit: ['']
    });
  }
  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    return this.modalCtrl.dismiss(this.name, 'confirm');
  }
}
