import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
	@Input() id:number;
	@Input() descripcion:string;
	mostrar = true;
	

  constructor() {}

  ngOnInit(): void {
  }

  mostrarUno(): boolean{
  	return (this.mostrar =!this.mostrar);

  }
  

}
