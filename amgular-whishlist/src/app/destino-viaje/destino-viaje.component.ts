import { Component, OnInit, Input, HostBinding, EventEmitter, Output} from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.module';
import {DestinoViaje} from './../models/destino-viaje.model';

@Component({
  selector: 'app-destino-viaje',
  templateUrl: './destino-viaje.component.html',
  styleUrls: ['./destino-viaje.component.css']
})
export class DestinoViajeComponent implements OnInit {
	@Input() destino: DestinoViaje;
	@Input('idx') position: number;
	@HostBinding('attr.class') cssClass = 'col-md-4';
	@Output() onclicked: EventEmitter<DestinoViaje>;
	
	constructor(private store: Store<AppState>) {
		this.onclicked = new EventEmitter();
	}

 	ngOnInit(): void {
	}

	ir(){
		this.onclicked.emit(this.destino);
		return false;
	}

}
