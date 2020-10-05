import { Store } from '@ngrx/store';
import { AppState } from '../app.module';
import {DestinoViaje} from './destino-viaje.model';

export class DestinosApiClient {
    destinos: DestinoViaje [];
    constructor() {
        this.destinos = [];
    }
    add(d: DestinoViaje) {
        this.destinos.push(d);
    }

    getAll(): DestinoViaje[] {
        return this.destinos;
    }

    getById(id: String): DestinoViaje {
        return this.destinos.filter((d) => d.id.toString() === id)[0];
    }
    elegir(d: DestinoViaje){
        this.destinos.forEach(x => x.setSelected(false));
        d.setSelected(true);
    }

   
}