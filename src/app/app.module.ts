import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { OnboardingComponent } from './pages/onboarding/onboarding.component';
import { MdlCreateDependienteComponent } from './pages/mdl-create-dependiente/mdl-create-dependiente.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { LoginGuard } from './guard/login.guard';
@NgModule({
  declarations: [
    AppComponent,
    OnboardingComponent,
    MdlCreateDependienteComponent
  ],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },LoginGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
