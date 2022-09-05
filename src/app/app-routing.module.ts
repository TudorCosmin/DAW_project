import { NgModule } from '@angular/core';
import { RequiredValidator } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
{
  path: '',
  canActivate: [AuthGuard],
  children: [
    {
      path: 'acasa',  
      loadChildren: ()=> import ('src/app/modules/acasa/acasa.module').then(m => m.AcasaModule)
    },

    {
      path: 'produse',
      redirectTo: 'acasa/produse'
    },

    {
      path: 'livrare',
      redirectTo: 'acasa/livrare'
    }
  ]
},

{
  path: 'auth',
  loadChildren: ()=> import ('src/app/modules/auth/auth.module').then(m => m.AuthModule)
},

{
  path: 'login',
  redirectTo: 'auth/login'
},

{
  path: 'register',
  redirectTo: 'auth/register'
},

{
  path: 'produse',
  loadChildren: ()=> import ('src/app/modules/acasa/acasa.module').then(m => m.AcasaModule)
},

{
  path: '**',
  loadChildren: ()=> import ('src/app/modules/others/others.module').then(m => m.OthersModule)
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
