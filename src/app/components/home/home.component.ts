import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ViajesService, Viaje } from '../../servicios/viajes.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  viajes: Viaje[] = [];
  constructor(private viajesser: ViajesService, private router: Router ) { }

  ngOnInit(): void {
    this.viajes = this.viajesser.getViajes();
    console.log(this.viajes);
  }

}
