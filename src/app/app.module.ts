import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {ViajesService} from './servicios/viajes.service';

import { APP_ROUTING } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TarjetaViajesComponent } from './components/tarjeta-viajes/tarjeta-viajes.component';
import { ViajeExplicadoComponent } from './components/viaje-explicado/viaje-explicado.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BookingComponent } from './components/booking/booking.component';
import { CalendarioComponent } from './components/calendario/calendario.component';
import { CuponescovidComponent } from './components/cuponescovid/cuponescovid.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TarjetaViajesComponent,
    ViajeExplicadoComponent,
    NavbarComponent,
    BookingComponent,
    CalendarioComponent,
    CuponescovidComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    ViajesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
