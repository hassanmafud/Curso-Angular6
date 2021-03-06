import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { DestinoViaje } from '../../models/destino-viaje.model';
import { DestinosApiClient } from '../../models/destinos-api-client.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.module';


@Component({
  selector: 'app-lista-destinos',
  templateUrl: './lista-destinos.component.html',
  styleUrls: ['./lista-destinos.component.css'],
  providers: [DestinosApiClient]
})
export class ListaDestinosComponent implements OnInit {
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onItemAdded: EventEmitter<DestinoViaje>;
  updates: string[];
  all;

  constructor(
    private destinosApiClient: DestinosApiClient,
    private store: Store<AppState>
  ) {
    this.onItemAdded = new EventEmitter();
    this.updates = [];
    this.store
      .select((state) => state.destinos.favorito)
      .subscribe((d) => {
        if (d != null) {
          this.updates.push('Se ha elegido a' + d.nombre);
        }
      });
    store
      .select((state) => state.destinos.items)
      .subscribe((items) => (this.all = items));
  }
  ngOnInit(): void { }

  agregado(d: DestinoViaje): void {
    this.destinosApiClient.add(d);
    this.onItemAdded.emit(d);
  }

  elegido(e: DestinoViaje): void {
    this.destinosApiClient.elegir(e);
  }

  getAll(): void { }
}
