import { Component, OnInit } from '@angular/core';
import {Item} from './../models/item.model';

@Component({
  selector: 'app-listado-items',
  templateUrl: './listado-items.component.html',
  styleUrls: ['./listado-items.component.css']
})
export class ListadoItemsComponent implements OnInit {
	title='Listado de Articulos';
  listado: Item[] ;

  constructor() {
    this.listado = [
    { id: 143, descripcion: ' Radio Grabador' ,img:'https://d26lpennugtm8s.cloudfront.net/stores/173/524/products/radiograbador-daihatsu-dc150-mp3-usb-d_nq_np_456211-mla20516469987_122015-f1-6e2d3608d4a06f93b715843673560855-1024-1024.jpg'},
    { id: 9862, descripcion: 'Celular', img:'https://lh3.googleusercontent.com/proxy/1TXPg-b_yO-qJoPthyjBu14RpK1UUUSAPqPI79bJLHfG5I2usXMfkNB8GmEYaLDartlcutXijbU6VQFE-cZnRbIlgsArYcIkl7jshVWa_3D1o2YnMWrmn8ZpjgByJtawSmDyyHpd'},
    { id: 768, descripcion: 'Cajonera', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSx7ZXMB0L4qL2IKzQ8RYI6cVrX4QtTIbRGxIpLyNqv3E4iL5XvIxPEFRLD8YahZ7lNknuwDaQ&usqp=CAc' },
    { id: 4324, descripcion: 'Notebook', img:'https://decompras.com.ar/wp-content/uploads/2019/11/notebook2-hp-240-g7-i3-la-casa-de-la-notebook-de-compras.png' },
    ];
  }

  ngOnInit(): void {
  }

  guardar(id: number, descripcion:string , img:string): boolean{
    this.listado.push(new Item(id, descripcion, img));
    console.log(this.listado);
    return false;
  }

}
