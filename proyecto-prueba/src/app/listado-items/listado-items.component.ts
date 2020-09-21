import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-items',
  templateUrl: './listado-items.component.html',
  styleUrls: ['./listado-items.component.css']
})
export class ListadoItemsComponent implements OnInit {
	title='Listado de Items';

	listado: any[] =[
    { id: 0, descripcion: 'Grabadores' },
    { id: 1, descripcion: 'Accesorios' },
    { id: 2, descripcion: 'Audio' },
    { id: 3, descripcion: 'Celulares' },
    { id: 4, descripcion: 'Cuidado Personal' },
    { id: 5, descripcion: 'Dvd' },
    { id: 6, descripcion: 'Fotografia' },
    { id: 7, descripcion: 'Frio-Calor' },
    { id: 8, descripcion: 'Gps' },
    { id: 9, descripcion: 'Informatica' },
    { id: 10, descripcion: 'Led - Lcd' }
  	];

  constructor() {}

  ngOnInit(): void {
  }

}
