import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent implements OnInit {

  mayusculas: boolean = false;

  ordenarPor: string = '';

  heroes: Heroe[]=[{
    nombre: 'Superman',
    vuela: true,
    color: Color.azul
  },
  {
    nombre: 'Batman',
    vuela: false,
    color: Color.negro
  },
  {
    nombre: 'Robin',
    vuela: false,
    color: Color.verde
  },
  {
    nombre: 'Daredevil',
    vuela: false,
    color: Color.rojo
  },
  {
    nombre: 'Linterba Verde',
    vuela: true,
    color: Color.verde
  },
];

  constructor() { }

  ngOnInit(): void {
    
  }

  cambiarMayusculas(){
    this.mayusculas= !this.mayusculas; 
  }

  cambiarOrden(valor: string){
    this.ordenarPor = valor;
  }

}
