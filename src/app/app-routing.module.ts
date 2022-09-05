import { NgModule } from '@angular/core';
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
  ]
},

{
  path: 'login',
  loadChildren: ()=> import ('src/app/modules/auth/auth.module').then(m => m.AuthModule)
},

{
  path: 'login',
  loadChildren: ()=> import ('src/app/modules/auth/auth.module').then(m => m.AuthModule)
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
