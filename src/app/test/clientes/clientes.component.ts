import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',  
  styleUrls: ['./clientes.component.css']
})

export class ClientesComponent implements OnInit {
  item: any;
  panelOpenState = false;
  url = './assets/json/clientes.json';

  constructor( public http: HttpClient) {   }

  ngOnInit() {
    this.http.get<any>(this.url).subscribe(Response => {
      this.item = Response
    })
  }  
}