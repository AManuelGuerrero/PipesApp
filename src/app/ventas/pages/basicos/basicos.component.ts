import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  nombreLower: string = 'manuel';
  nombreUpper: string = 'MANUEL';
  nombreCompleto: string = 'ManuEL gUeRRerO'

  fecha: Date = new Date();
  
  constructor() { }

  ngOnInit(): void {
  }

}
