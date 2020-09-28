import { Component, OnInit, Input, HostBinding} from '@angular/core';
import {Item} from './../models/item.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
	@Input() item:Item;
  	@HostBinding('attr.class') cssClass="col-md-4";

  constructor() {}

  ngOnInit(): void {
  }

  
  

}
