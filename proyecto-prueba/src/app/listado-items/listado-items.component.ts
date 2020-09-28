import { Component, OnInit } from '@angular/core';
import {Item} from './../models/item.model';

@Component({
  selector: 'app-listado-items',
  templateUrl: './listado-items.component.html',
  styleUrls: ['./listado-items.component.css']
})
export class ListadoItemsComponent implements OnInit {
	title='Listado de Items';
  listado: Item[] ;

  constructor() {
    this.listado = [];
  }

  ngOnInit(): void {
  }

  guardar(id: number, descripcion:string , img:string): boolean{
    this.listado.push(new Item(id, descripcion, img));
    console.log(this.listado);
    return false;
  }

}
