import { Injectable } from '@angular/core';

@Injectable()
export class ViajesService {

private viajes: Viaje[] = [
  {
    lugar: 'Budapest',
    fecha_llegada: '06/08/2020',
    fecha_vuelta: '08/08/2020',
    ruta_ida: 'Madrid - Budapest (07:10 - 09:05)',
    vuelo_ida: 'E99UPD',
    correovuelo_ida: 's.andravera.mendez.90@gmail.com',
    correovuelo_idasan: 'sa.ndravera.mendez.90@gmail.com',
    vuelo_idasan: 'JCP9PH',
    ruta_vuelta: 'Budapest - Madrid (20:00 - 23:50)',
    vuelo_vuelta: 'A2Y9YI',
    vuelo_vueltasan: 'C4MTKP',
    correovuelo_vuelta: 'san.dravera.mendez.90@gmail.com',
    correovuelo_vueltasan: 'sand.ravera.mendez.9.0@gmail.com',
    hotel: 'BDPST City Center Hostel Rooms',
    img: 'assets/imagenes/Budapest.jpg',
    webreserva: 'Booking',
    webreserva2: ''
  },
{
  lugar: 'Canarias',
  fecha_llegada: '19/08/2020',
  fecha_vuelta: '23/08/2020',
  ruta_ida: 'Madrid - Tenerife (07:10 - 09:05)',
  vuelo_ida: 'X8HSNT',
  correovuelo_ida: 'christianvazquez89@gmail.com',
  correovuelo_idasan: 'christianvazque.z.89@gmail.com',
  vuelo_idasan: 'OZF45L',
  ruta_vuelta: 'Tenerife - Madrid (20:00 - 23:50)',
  vuelo_vuelta: 'BY77JK',
  vuelo_vueltasan: 'LY45WQ',
  correovuelo_vuelta: 'christ.ianvazque.z89@gmail.com',
  correovuelo_vueltasan: 's.a.ndraveramendez90@gmail.com',
  hotel: 'Apartamento La Carabela',
  img: 'assets/imagenes/Tenerife.jpg',
  webreserva: 'Central de Reservas (christianvazquez88@gmail.com / sanvera909090@gmail.com)',
  webreserva2: 'Airbnb (christianvazquezbar89@gmx.com)'
},
{
  lugar: 'Croacia ??',
  fecha_llegada: '24/08/2020',
  correovuelo_ida: 'c.hristianv.a.z.que.z89@gmail.com',
  correovuelo_ida2: 'christi.a.n.v.azquez8.9@gmail.com',
  correovuelo_idasan2: 'c.hristian.v.a.zquez.89@gmail.com',
  fecha_vuelta: '29/08/2020',
  correovuelo_vuelta: 'christi.a.n.v.a.zquez.89@gmail.com',
  correovuelo_vuelta2: 'christi.a.n.v.azquez8.9@gmail.com ',
  correovuelo_vueltasan2: 'c.hristian.v.a.zquez.89@gmail.com',
  ruta_ida: 'Madrid - Viena (10:15 - 13:15)',
  ruta_ida2: 'Viena - Zadar (19:25 -20:40)',
  vuelo_ida: 'IDNDNE (2 personas)',
  vuelo_idasan: 'IDNDNE (2 personas)',
  vuelo_ida2: 'J462VF',
  vuelo_idasan2: 'E3JPQF',
  ruta_vuelta: 'Zadar - Milan Bergamo (22:55 - 23:59)',
  ruta_vuelta2: 'Milan Bergamo - Madrid (06:45 - 09:10)',
  vuelo_vuelta: 'Z7IEFZ (2 personas)',
  vuelo_vueltasan: 'Z7IEFZ (2 personas)',
  vuelo_vuelta2: 'EBMNMK',
  vuelo_vueltasan2: 'G8YZ9D',
  hotel: 'Sin Reservar',
  img: 'assets/imagenes/Croacia.jpg',
  webreserva: ''
},

{
  lugar: 'Jordania',
  fecha_llegada: '01/09/2020',
  correovuelo_ida: 'chr.i.stianvazquez.8.8@gmail.com',
  correovuelo_ida2: 'christi.a.nvazquez89@gmail.com',
  correovuelo_idasan: '	ch.r.istianvazqu.e.z88@gmail.com',
  correovuelo_idasan2: 'chris.t.ianvazquez88@gmail.com',
  fecha_vuelta: '09/09/2020',
  correovuelo_vuelta: 'christia.n.vazquez88@gmail.com',
  correovuelo_vuelta2: 'ch.r.istian.v.azquez88@gmail.com ',
  correovuelo_vueltasan: 'christi.a.nvazquez88@gmail.com',
  correovuelo_vueltasan2: 'ch.r.istianvazqu.e.z88@gmail.com',
  ruta_ida: 'Madrid - Milan Malpensa (06:30 - 08:40)',
  ruta_ida2: 'Milan Bergamo - Amman (15:45 -20:35)',
  vuelo_ida: 'P54YRC',
  vuelo_ida2: 'A9DNGQ',
  vuelo_idasan: 'MZNYVB',
  vuelo_idasan2: 'YZHVHR',
  ruta_vuelta: 'Amman - Milan Bergamo (21:00 - 00:10)',
  ruta_vuelta2: 'Milan Bergamo - Madrid (20:55 - 23:20)',
  vuelo_vuelta: 'S6HW6Z',
  vuelo_vuelta2: 'V9F9PT',
  vuelo_vueltasan: 'WBWGKN',
  vuelo_vueltasan2: 'Z2K1GL',
  hotel: 'Sin Reservar',
  img: 'assets/imagenes/Jordania.jpg',
  webreserva: 'Booking'
},
{
  lugar: 'Paris (Plan B)',
  fecha_llegada: '05/09/2020',
  fecha_vuelta: '07/09/2020',
  ruta_ida: 'Madrid - Paris (06:50 - 09:00)',
  vuelo_ida: 'Q6V47J',
  correovuelo_ida: 'christi.an.va.zq.ue.z88@gmail.com',
  correovuelo_idasan: 'ch.ris.ti.an.vazquez88@gmail.com',
  vuelo_idasan: 'ODD1VH',
  ruta_vuelta: 'Paris - Madrid (09:45 - 11:55)',
  vuelo_vuelta: 'M7F2HJ',
  vuelo_vueltasan: 'GCJ55U',
  correovuelo_vuelta: 'c.hristianvazquez8.9@gmail.com',
  correovuelo_vueltasan: 'c.h.ristianvazquez.8.9@gmail.com',
  hotel: '',
  img: 'assets/imagenes/Paris.jpg',
  webreserva: '',
  webreserva2: ''
},
{
  lugar: 'Bucarest / Saga Festival',
  fecha_llegada: '10/09/2020',
  fecha_vuelta: '17/09/2020',
  correovuelo_ida: 'c.h.risti.anva.zqu.ez88@gmail.com',
  correovuelo_ida2: 'christianva.z.q.u.e.z88@gmail.com',
  ruta_ida: 'Madrid - Bucarest (16:25 - 21:05)',
  ruta_ida2: 'OPCION B [12 Sep] - Madrid - Bucarest (16:30 -21:10)',
  vuelo_ida: 'HBSJRK',
  vuelo_ida2: 'Y1BVJB',
  ruta_vuelta: 'Bucarest - Madrid (21:30 - 00:35)',
  vuelo_vuelta: 'JCKDRX',
  correovuelo_vuelta: 'christianvazqu.e.z.8.8@gmail.com',
  hotel: 'Sin Reservar',
  img: 'assets/imagenes/Bucarest.jpg',
  webreserva: 'Booking'
},

{
  lugar: 'Abu Dhabi / Dubai',
  fecha_llegada: '13/09/2020',
  fecha_vuelta: '16/09/2020',
  correovuelo_ida: 'christ.ianva.zquez88@gmail.com',
  ruta_ida: 'Bucarest - Abu Dhabi (14:40 - 20:50)',
  vuelo_ida: 'A8Q25S',
  ruta_vuelta: 'Abu Dhabi - Bucarest (21:35 - 02:10)',
  vuelo_vuelta: 'AFZKXD',
  correovuelo_vuelta: 'chris.tianvaz.quez8.8@gmail.com',
  hotel: 'Sin Reservar',
  img: 'assets/imagenes/Dubai.jpg',
  webreserva: 'Booking'
},


{
  lugar: 'Hope Toulouse',
  fecha_llegada: '18/09/2020',
  fecha_vuelta: '20/09/2020',
  correovuelo_ida: 'chr.istianva.zqu.ez89@gmail.com',
  ruta_ida: 'Madrid - Toulouse (13:00 - 14:20)',
  vuelo_ida: 'K9F6MT',
  ruta_vuelta: 'Toulouse - Madrid (15:05 - 16:30)',
  vuelo_vuelta: 'YYDVJT',
  correovuelo_vuelta: 'christianvaz.qu.ez.89@gmail.com',
  hotel: 'Sin Reservar',
  img: 'assets/imagenes/HopeToulouse.jpg',
  webreserva: 'Booking'
},

{
  lugar: 'Islandia',
  fecha_llegada: '16/10/2020',
  fecha_vuelta: '20/10/2020',
  correovuelo_ida: '',
  correovuelo_ida2: 'chris.tian.vazquez.88@gmail.com',
  ruta_ida: 'Madrid - Milan ()',
  ruta_ida2: 'Milan - Reykjavik (16:30 - 18:45)',
  vuelo_ida: '',
  vuelo_ida2: 'MK3U2B',
  ruta_vuelta: 'Reykjavik - Milan (19:30 - 01:40)',
  ruta_vuelta2: 'Milan - Madrid (09:05 - 11:25)',
  vuelo_vuelta: 'WCCNYP',
  vuelo_vuelta2: 'D814MG',
  correovuelo_vuelta: 'chris.t.ianv.azquez8.8@gmail.com',
  correovuelo_vuelta2: 'christia.nva.zq.u.ez88@gmail.com',
  hotel: 'Sin Reservar',
  img: 'assets/imagenes/Islandia.jpg',
  webreserva: 'Booking'
},

{
  lugar: 'Berlin',
  fecha_llegada: '07/11/2020',
  fecha_vuelta: '09/11/2020',
  correovuelo_ida: 'christia.nvaz.quez88@gmail.com',
  ruta_ida: 'Madrid - Berlin (17:30 - 20:40)',
  vuelo_ida: 'K1MC457',
  ruta_vuelta: 'Berlin - Madrid (12:05 - 15:15)',
  vuelo_vuelta: 'Q8DYUG',
  correovuelo_vuelta: 'ch.ri.stianvazqu.ez88@gmail.com',
  hotel: 'Sin Reservar',
  img: 'assets/imagenes/Berlin.jpg',
  webreserva: 'Booking'
},
{
  lugar: 'Fez',
  fecha_llegada: '05/12/2020',
  fecha_vuelta: '08/12/2020',
  correovuelo_ida: 'christ.ianvazq.uez89@gmail.com',
  correovuelo_idasan: 'ch.ristianvazquez88@gmail.com',
  ruta_ida: 'Madrid - Fez (14:55 - 16:30)',
  vuelo_ida: 'H9ST5N',
  vuelo_idasan: 'B99R8A',
  ruta_vuelta: 'Fez - Madrid (12:40 - 14:20)',
  vuelo_vuelta: 'RDWQ7E',
  vuelo_vueltasan: 'Z3KVYY',
  correovuelo_vuelta: 'christianvazquez8.8@gmail.com ',
  correovuelo_vueltasan: 'christianvazque.z.88@gmail.com',
  hotel: 'Sin Reservar',
  img: 'assets/imagenes/Fez.jpg',
  webreserva: 'Booking'
},

{
  lugar: 'Tomorrowland 2021',
  fecha_llegada: '15/07/2021',
  fecha_vuelta: '19/07/2021',
  correovuelo_ida: 'CHRIS.TIANVAZQ.U.EZ89@gmail.com',
  correovuelo_idasan: 'SA.NDRAVERAME.ND.E.Z90@GMAIL.COM',
  ruta_ida: 'Madrid - Bruselas (14:55 - 16:30)',
  vuelo_ida: 'L7DY5W',
  vuelo_idasan: 'PAG6GX',
  ruta_vuelta: 'Bruselas - Madrid (?? - ??)',
  vuelo_vuelta: '',
  vuelo_vueltasan: '',
  correovuelo_vuelta: '',
  correovuelo_vueltasan: '',
  hotel: 'Sin Reservar',
  img: 'assets/imagenes/Tomorrowland.jpg',
  webreserva: 'Booking'
},

];

  constructor() { }

  getViajes(): Viaje[] {
    return this.viajes; // funcion para mandar datos array
  }

  getViaje(idx: number) {
    return this.viajes[idx]; // funcion para mandar datos array
  }
}

export interface Viaje {
 lugar: string;
 fecha_llegada: string;
 fecha_vuelta: string;
 ruta_ida: string;
 vuelo_ida: string;
 correovuelo_ida: string;
 correovuelo_idasan?: string;
 correovuelo_vuelta: string;
 correovuelo_vueltasan?: string;
 vuelo_vuelta: string;
 ruta_vuelta: string;
 vuelo_idasan?: string;
 vuelo_idasan2?: string;
 vuelo_vueltasan?: string;
 vuelo_vueltasan2?: string;
 hotel: string;
 img: string;
 webreserva: string;
 vuelo_ida2?: string;
 vuelo_vuelta2?: string;
 correovuelo_ida2?: string;
 correovuelo_idasan2?: string;
 correovuelo_vuelta2?: string;
 correovuelo_vueltasan2?: string;
 ruta_ida2?: string;
 ruta_vuelta2?: string;
 webreserva2?: string;
}

