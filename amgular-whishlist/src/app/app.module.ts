import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {StoreModule as NgRxStoreModule, ActionReducerMap} from '@ngrx/store';
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

import { AppComponent } from './app.component';
import { DestinoViajeComponent } from './components/destino-viaje/destino-viaje.component';
import { ListaDestinosComponent } from './components/lista-destinos/lista-destinos.component';
import { DestinoDetalleComponent } from './components/destino-detalle/destino-detalle.component';
import { FormDestinoViajeComponent } from './components/form-destino-viaje/form-destino-viaje.component';
import { DestinosApiClient } from './models/destinos-api-client.model';
import { DestinosViajesState, initializeDestinosViajesState, reducerDestinosViajes, DestinosViajesEffects } from './models/destinos-viajes-state.model';
import {EffectsModule} from '@ngrx/effects';
import { LoginComponent } from './components/login/login/login.component';
import { ProtectedComponent } from './components/protected/protected/protected.component';
import { UsuarioLogeadoGuard } from './guards/usuario-logueado/usuario-logeado.guard';
import { AuthService } from './services/auth.service';
import { VuelosComponentComponent } from './components/vuelos/vuelos-component/vuelos-component.component';
import { VuelosMainComponentComponent } from './components/vuelos/vuelos-main-component/vuelos-main-component.component';
import { VuelosMasInfoComponentComponent } from './components/vuelos/vuelos-mas-info-component/vuelos-mas-info-component.component';
import { VuelosDetalleComponentComponent } from './components/vuelos/vuelos-detalle-component/vuelos-detalle-component.component';
import { ReservasModule } from './reservas/reservas.module';

export const childrenRoutesVuelos: Routes =[
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  {path: 'main', component: VuelosMainComponentComponent},
  {path: 'mas-info', component: VuelosMasInfoComponentComponent},
  {path: ':id', component: VuelosDetalleComponentComponent}
]


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: ListaDestinosComponent},
  {path: 'destino/:id', component: DestinoDetalleComponent},
  {path: 'login', component: LoginComponent},
  //puedo acceder solamente si estoy logeado
  {path: 'protected', component: ProtectedComponent, canActivate: [ UsuarioLogeadoGuard]},
  //puedo acceder solamente si estoy logeado y ademas aunque se cargue dicho componente va a tener rutas hijas 'childrenRoutesVuelos'
  {path: 'vuelos', component: VuelosComponentComponent, canActivate: [UsuarioLogeadoGuard], children: childrenRoutesVuelos}
];

// redux init
export interface AppState{
  destinos: DestinosViajesState;
}

const reducers: ActionReducerMap<AppState> = {
  destinos: reducerDestinosViajes
};


const reducersInitialState = {
  destinos: initializeDestinosViajesState()
};

// reduc fin init


@NgModule({
  declarations: [
    AppComponent,
    DestinoViajeComponent,
    ListaDestinosComponent,
    DestinoDetalleComponent,
    FormDestinoViajeComponent,
    LoginComponent,
    ProtectedComponent,
    VuelosComponentComponent,
    VuelosMainComponentComponent,
    VuelosMasInfoComponentComponent,
    VuelosDetalleComponentComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routes),
    NgRxStoreModule.forRoot(reducers, { initialState: reducersInitialState }),
    EffectsModule.forRoot([DestinosViajesEffects]),
    StoreDevtoolsModule.instrument(),
    ReservasModule,
  ],
  providers: [
    AuthService,
    UsuarioLogeadoGuard,
    DestinosApiClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
