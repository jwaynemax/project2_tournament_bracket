import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelloComponent } from './tournament/hello/hello.component';
import { BracketsComponent } from './tournament/brackets/brackets.component';
import { RegistrationComponent } from './tournament/registration/registration.component';


const routes: Routes = [
  {path: '', component: HelloComponent},
  {path: 'hello', component: HelloComponent},
  {path: 'brackets', component: BracketsComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: '**', redirectTo: '/register' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
