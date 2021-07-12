import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exames',
  templateUrl: './exames.component.html',
  styleUrls: ['./exames.component.css']
})
export class ExamesComponent implements OnInit {
  item: any;
  panelOpenState = false;

  constructor() {
    this.read_lista();

  }
  ngOnInit() {

  }
  read_lista(){
    fetch('./assets/json/exames.json').then (res => res.json())
    .then(json => {
      this.item = json;
    });
  }

}

