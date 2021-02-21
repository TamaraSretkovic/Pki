import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KupacComponent } from './components/kupac/kupac.component';
import { LoginComponent } from './components/login/login.component';
import { ProdavacComponent } from './components/prodavac/prodavac.component';


const routes: Routes = [
  {
    path: '', component: LoginComponent
  },
  {
    path: 'prodavac', component: ProdavacComponent
  },
  {
    path: 'kupac', component: KupacComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
