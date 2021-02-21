import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KupacComponent } from './components/kupac/kupac.component';
import { LoginComponent } from './components/login/login.component';
import { ProdavacComponent } from './components/prodavac/prodavac.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { ProdavacNavBarComponent } from './components/prodavac-nav-bar/prodavac-nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    KupacComponent,
    LoginComponent,
    ProdavacComponent,
    FooterComponent,
    ProdavacNavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
