import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Importamos nuestro array proveniente de app-routing.module
import { routing, appRoutingProviders } from './app-routing.module';
import { AppComponent } from './app.component';
import { PecesComponent } from './peces/peces.component';
import { HomeComponent } from './home/home.component';
import { AccesoriosComponent } from './accesorios/accesorios.component';
import { AlumnosComponent } from './alumnos/alumnos.component';

@NgModule({
  declarations: [
    AppComponent,
    PecesComponent,
    HomeComponent,
    AccesoriosComponent,
    AlumnosComponent
  ],
  imports: [
    BrowserModule,
    //Importamos nuestro routing
    routing
  ],
  providers: [
  appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
