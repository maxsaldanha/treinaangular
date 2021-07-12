import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-farmacos',
  templateUrl: './farmacos.component.html',
  styleUrls: ['./farmacos.component.css']
})
export class FarmacosComponent implements OnInit {
  item: any;
  panelOpenState = false;

  constructor() {
    this.read_lista();

  }
  ngOnInit() {

  }
  read_lista(){
    fetch('./assets/json/medicamento.json').then (res => res.json())
    .then(json => {
      this.item = json;
    });
  }

}
