import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ViajesService, Viaje } from '../../servicios/viajes.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit {
  numeroviaje: number;
  viaje: any = {};

  constructor(private activatedroute: ActivatedRoute, private viajesser: ViajesService, private router: Router ) { }

  ngOnInit(): void {
    // tslint:disable-next-line: no-string-literal
    this.numeroviaje = this.activatedroute.snapshot.params['id'];
    console.log(this.numeroviaje);
    this.viaje = this.viajesser.getViaje(this.numeroviaje);
    console.log(this.viaje);
  }

}
