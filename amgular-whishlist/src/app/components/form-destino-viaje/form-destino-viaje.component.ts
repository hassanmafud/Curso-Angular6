import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { fromEvent } from 'rxjs';
import { map, filter, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { DestinoViaje } from '../../models/destino-viaje.model';

@Component({
  selector: 'app-form-destino-viaje',
  templateUrl: './form-destino-viaje.component.html',
  styleUrls: ['./form-destino-viaje.component.css']
})
export class FormDestinoViajeComponent implements OnInit {
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onItemAdded: EventEmitter<DestinoViaje>;
  fg: FormGroup;
  minLongitud = 3 ;
  searchResults: string [];

  constructor(fb: FormBuilder) {
    this. onItemAdded = new EventEmitter();
    this.fg = fb.group({
      nombre: ['', Validators.compose([Validators.required, this.nombreValidator, this.nombreValidatorParametrizable(this.minLongitud)])],
      url: ['']
    });

    this.fg.valueChanges.subscribe((form: any) => {
      console.log('cambio el formulario:' , form);
    });
   }

  ngOnInit(): void{
    const elemNombre = document.getElementById('nombre') as HTMLInputElement;
    fromEvent(elemNombre, 'input').pipe(
      map((e: KeyboardEvent) => (e.target as HTMLInputElement).value),
      filter(text => text.length > 2),
      debounceTime(200),
      distinctUntilChanged(),
      switchMap(() => ajax('/assets/datos.json'))
    ).subscribe(ajaxResponse => {
      this.searchResults = ajaxResponse.response;
    });

  }

  guardar(nombre: string , url: string): boolean{
    const d = new DestinoViaje(nombre, url);
    this.onItemAdded.emit(d);
    return false;
  }
  nombreValidator(control: FormGroup): { [s: string]: boolean} {
    const l =  control.value.toString().trim().length;
    if (l > 0 && l < 5 ){
      return {invalidNombre: true};
    }
    return null;
  }
  nombreValidatorParametrizable(minLong: number): ValidatorFn {
    return ( control: FormGroup): { [s: string]: boolean }| null => {
      const l =  control.value.toString().trim().length;
      if (l > 0 && l < minLong){
        return {minLongNombre: true};
      }
      return null;
    };
  }

}
