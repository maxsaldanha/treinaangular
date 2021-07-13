import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  template: `
  <ng-container
    *ngIf="isLoggedIn; then userloggedIn; else userloggedOut">
  </ng-container>

  <ng-template #userloggedIn>
    <div>
      Hello User
    </div>
  </ng-template>

  <ng-template #userloggedOut>
    <div>
      Please Login
    </div>
  </ng-template>
`,
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  item: any;
  panelOpenState = false;
  userLoggedIn = true;

  constructor() {
    this.read_lista();

  }
  ngOnInit() {

  }
  read_lista(){
    fetch('./assets/json/clientes.json').then (res => res.json())
    .then(json => {
      this.item = json;
    });
  }
  
}
