import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss'],
})
export class OnboardingComponent implements OnInit {
  public authPublic
  constructor(public router: Router,
    private menu:MenuController) {
      this.menu.enable(false);
     }
  ngOnInit() {}

  goToLogin(){
    this.router.navigate(['login']);
  }

}
