import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-farmacos',
  templateUrl: './farmacos.component.html',
  styleUrls: ['./farmacos.component.css']
})
/* Fonte: https://bvsms.saude.gov.br/bvs/publicacoes/relacao_medicamentos_rename_2020.pdf*/
export class FarmacosComponent implements OnInit {
  item: any;
  panelOpenState = false;
  url = './assets/json/medicamento.json'

  constructor(private http : HttpClient) {  }

  ngOnInit() {
    this.http.get(this.url).subscribe (Response => {
      this.item = Response
    })
  }
}
