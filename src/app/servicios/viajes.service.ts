import { Injectable } from '@angular/core';

@Injectable()
export class ViajesService {

private viajes: Viaje[] = [
  {
    lugar: 'Budapest',
    fecha_llegada: '06/08/2020',
    fecha_vuelta: '08/08/2020',
    ruta_ida: 'Madrid - Budapest (07:10 - 09:05)',
    vuelo_ida: 'E96767',
    correovuelo_ida: 's.and90@gmail.com',
    correovuelo_idasan: 'sa.nz.90@gmail.com',
    vuelo_idasan: 'JC89PH',
    ruta_vuelta: 'Budapest - Madrid (20:00 - 23:50)',
    vuelo_vuelta: 'A2896I',
    vuelo_vueltasan: 'C4666P',
    correovuelo_vuelta: 'sanez.90@gmail.com',
    correovuelo_vueltasan: 'sandz.9.0@gmail.com',
    hotel: 'City Center Hostel Rooms',
    img: 'assets/imagenes/Budapest.jpg',
    webreserva: 'Booking',
    webreserva2: ''
  },
{
  lugar: 'Canarias',
  fecha_llegada: '19/08/2020',
  fecha_vuelta: '23/08/2020',
  ruta_ida: 'Madrid - Tenerife (07:10 - 09:05)',
  vuelo_ida: 'X8676T',
  correovuelo_ida: 'christ@gmail.com',
  correovuelo_idasan: 'chrque.z.89@gmail.com',
  vuelo_idasan: 'OZ555L',
  ruta_vuelta: 'Tenerife - Madrid (20:00 - 23:50)',
  vuelo_vuelta: 'B5656K',
  vuelo_vueltasan: 'L565Q',
  correovuelo_vuelta: 'che.z89@gmail.com',
  correovuelo_vueltasan: 's.a.endez90@gmail.com',
  hotel: 'Apartamento La Carabela',
  img: 'assets/imagenes/Tenerife.jpg',
  webreserva: 'Central de Reservas ',
  webreserva2: 'Airbnb (christvar89@gmx.com)'
},
{
  lugar: 'Croacia ??',
  fecha_llegada: '24/08/2020',
  correovuelo_ida: 'c.hri.que.z89@gmail.com',
  correovuelo_ida2: 'chriquez8.9@gmail.com',
  correovuelo_idasan2: 'c.hrzquez.89@gmail.com',
  fecha_vuelta: '29/08/2020',
  correovuelo_vuelta: 'chriez.89@gmail.com',
  correovuelo_vuelta2: 'christizquez8.9@gmail.com ',
  correovuelo_vueltasan2: 'c.hriuez.89@gmail.com',
  ruta_ida: 'Madrid - Viena (10:15 - 13:15)',
  ruta_ida2: 'Viena - Zadar (19:25 -20:40)',
  vuelo_ida: 'I6556NE (2 personas)',
  vuelo_idasan: 'I656NE (2 personas)',
  vuelo_ida2: 'J65F',
  vuelo_idasan2: 'E6563QF',
  ruta_vuelta: 'Zadar - Milan Bergamo (22:55 - 23:59)',
  ruta_vuelta2: 'Milan Bergamo - Madrid (06:45 - 09:10)',
  vuelo_vuelta: 'Z4344FZ (2 personas)',
  vuelo_vueltasan: 'Z5666Z (2 personas)',
  vuelo_vuelta2: 'E56K',
  vuelo_vueltasan2: 'G5666D',
  hotel: 'Sin Reservar',
  img: 'assets/imagenes/Croacia.jpg',
  webreserva: ''
},

{
  lugar: 'Jordania',
  fecha_llegada: '01/09/2020',
  correovuelo_ida: 'chrzquez.8.8@gmail.com',
  correovuelo_ida2: 'christi.z89@gmail.com',
  correovuelo_idasan: '	ch.z88@gmail.com',
  correovuelo_idasan2: 'chris.t.ianvazquez88@gmail.com',
  fecha_vuelta: '09/09/2020',
  correovuelo_vuelta: 'chrisuez88@gmail.com',
  correovuelo_vuelta2: 'ch.zquez88@gmail.com ',
  correovuelo_vueltasan: 'chriquez88@gmail.com',
  correovuelo_vueltasan2: 'ch.e.z88@gmail.com',
  ruta_ida: 'Madrid - Milan Malpensa (06:30 - 08:40)',
  ruta_ida2: 'Milan Bergamo - Amman (15:45 -20:35)',
  vuelo_ida: 'P4545C',
  vuelo_ida2: 'A5455Q',
  vuelo_idasan: 'M566566',
  vuelo_idasan2: 'Y555R',
  ruta_vuelta: 'Amman - Milan Bergamo (21:00 - 00:10)',
  ruta_vuelta2: 'Milan Bergamo - Madrid (20:55 - 23:20)',
  vuelo_vuelta: 'S333Z',
  vuelo_vuelta2: 'V3434T',
  vuelo_vueltasan: 'W45556N',
  vuelo_vueltasan2: 'Z56555L',
  hotel: 'Sin Reservar',
  img: 'assets/imagenes/Jordania.jpg',
  webreserva: 'Booking'
},



{
  lugar: 'Abu Dhabi / Dubai',
  fecha_llegada: '13/09/2020',
  fecha_vuelta: '16/09/2020',
  correovuelo_ida: 'ch@gmail.com',
  ruta_ida: 'Bucarest - Abu Dhabi (14:40 - 20:50)',
  vuelo_ida: 'A78788S',
  ruta_vuelta: 'Abu Dhabi - Bucarest (21:35 - 02:10)',
  vuelo_vuelta: 'A66667',
  correovuelo_vuelta: 'chz8.8@gmail.com',
  hotel: 'Sin Reservar',
  img: 'assets/imagenes/Dubai.jpg',
  webreserva: 'Booking'
},



{
  lugar: 'Islandia',
  fecha_llegada: '16/10/2020',
  fecha_vuelta: '20/10/2020',
  correovuelo_ida: '',
  correovuelo_ida2: 'chrez.88@gmail.com',
  ruta_ida: 'Madrid - Milan ()',
  ruta_ida2: 'Milan - Reykjavik (16:30 - 18:45)',
  vuelo_ida: '',
  vuelo_ida2: 'MK78788B',
  ruta_vuelta: 'Reykjavik - Milan (19:30 - 01:40)',
  ruta_vuelta2: 'Milan - Madrid (09:05 - 11:25)',
  vuelo_vuelta: 'W6566P',
  vuelo_vuelta2: 'D5666MG',
  correovuelo_vuelta: 'chr8.8@gmail.com',
  correovuelo_vuelta2: 'chriu.ez88@gmail.com',
  hotel: 'Sin Reservar',
  img: 'assets/imagenes/Islandia.jpg',
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

