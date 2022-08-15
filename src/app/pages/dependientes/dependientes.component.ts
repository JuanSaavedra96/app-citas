import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { MdlCreateDependienteComponent } from '../mdl-create-dependiente/mdl-create-dependiente.component';

@Component({
  selector: 'app-dependientes',
  templateUrl: './dependientes.component.html',
  styleUrls: ['./dependientes.component.scss'],
})
export class DependientesComponent implements OnInit {
  constructor(public router: Router,
    private modalCtrl: ModalController) { }

  ngOnInit() {}
  regresar(){
    this.router.navigate(['home']);
  }
  async openModal() {
    const modal = await this.modalCtrl.create({
      component: MdlCreateDependienteComponent,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();
    //AGREGAR FUNCION REGISTRO SI SE CONFIRMA EL MODAL
    if (role === 'confirm') {
      //this.message = `Hello, ${data}!`;
      console.log(data,role)
    }
  }
}
