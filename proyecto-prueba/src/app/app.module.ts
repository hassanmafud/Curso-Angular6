import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PruebaComponent } from './prueba/prueba.component';
import { ItemComponent } from './item/item.component';
import { ListadoItemsComponent } from './listado-items/listado-items.component';

@NgModule({
  declarations: [
    AppComponent,
    PruebaComponent,
    ItemComponent,
    ListadoItemsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
