import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { OnboardingComponent } from './pages/onboarding/onboarding.component';

const routes: Routes = [
  {
    path: '',
    component:OnboardingComponent,
    pathMatch: 'full',
    /* canActivate: [NologinGuard]  */
  },
  /* {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  }, */
  {
    path: 'onboarding',
    component:OnboardingComponent
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'recovery',
    loadChildren: () => import('./pages/recovery/recovery.module').then(m => m.RecoveryPageModule)
  },
  {
    path: 'recovery/:data',
    loadChildren: () => import('./pages/recovery/recovery.module').then(m => m.RecoveryPageModule)
  },
  {
    path: 'laboratorio',
    loadChildren: () => import('./pages/laboratorio/laboratorio.module').then(m => m.LaboratorioModule)
  },
  {
    path: 'recetas',
    loadChildren: () => import('./pages/recetas/recetas.module').then(m => m.RecetasModule)
  },
  {
    path: 'reservar-cita',
    loadChildren: () => import('./pages/reservar-cita/reservar-cita.module').then(m => m.ReservarCitaModule)
  },
  {
    path: 'beneficios',
    loadChildren: () => import('./pages/beneficios/beneficios.module').then(m => m.BeneficiosModule)
  },
  {
    path: 'dependientes',
    loadChildren: () => import('./pages/dependientes/dependientes.module').then(m => m.DependientesModule)
  },
  {
    path: 'citas-medicas',
    loadChildren: () => import('./pages/citas-medicas/citas-medicas.module').then(m => m.CitasMedicasModule)
  },
  /* {
    path: 'home/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  }, */
  {
    path: 'home',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
