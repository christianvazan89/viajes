import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TarjetaViajesComponent } from './components/tarjeta-viajes/tarjeta-viajes.component';
import { ViajeExplicadoComponent } from './components/viaje-explicado/viaje-explicado.component';
import { BookingComponent } from './components/booking/booking.component';
import { CalendarioComponent } from './components/calendario/calendario.component';
import { CuponescovidComponent } from './components/cuponescovid/cuponescovid.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'tarjeta-viajes', component: TarjetaViajesComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'cuponescovid', component: CuponescovidComponent},
  { path: 'viaje-explicado/:id', component: ViajeExplicadoComponent},
  { path: 'calendario/:id', component: CalendarioComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home'}
];


export const APP_ROUTING = RouterModule.forRoot(routes);
