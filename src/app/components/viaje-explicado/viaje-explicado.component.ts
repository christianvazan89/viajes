import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ViajesService, Viaje } from '../../servicios/viajes.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-viaje-explicado',
  templateUrl: './viaje-explicado.component.html',
  styleUrls: ['./viaje-explicado.component.css']
})
export class ViajeExplicadoComponent implements OnInit {
  numeroviaje: number;
  viaje: any = {};
  visible: boolean;
  visible2: boolean;
  visible3: boolean;
  visible4: boolean;
  visible5: boolean;
  visible6: boolean;
  visible7: boolean;
  visible8: boolean;
  visible9: boolean;
  visible10: boolean;
  constructor(private activatedroute: ActivatedRoute, private viajesser: ViajesService, private router: Router ) {
    }
    ngOnInit(): void {
      // tslint:disable-next-line: no-string-literal
      this.numeroviaje = this.activatedroute.snapshot.params['id'];
      console.log(this.numeroviaje);
      this.viaje = this.viajesser.getViaje(this.numeroviaje);
      console.log(this.viaje);
    }

  }

