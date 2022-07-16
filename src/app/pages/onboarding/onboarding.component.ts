import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss'],
})
export class OnboardingComponent implements OnInit {
  public authPublic
  constructor(public router: Router) {
  }
  ngOnInit() {}

  goToLogin(){
    this.router.navigate(['login']);
  }

}
