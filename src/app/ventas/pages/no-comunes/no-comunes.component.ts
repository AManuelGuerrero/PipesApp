import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent implements OnInit {

  nombre: string = 'Bea';
  genero: string = 'femenino';

  invitacionMapa = {
    'masculino' : 'invitarlo',
    'femenino' : 'invitarla'
  }
  

  clientes: string[] = ['María','Pedro','Juan'];
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando. ',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando '
  }

  persona = {
    nombre : 'Fernando',
    edad: 35,
    direccion: 'Ottawa, Canada'
  }

  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
  ];

  miObservable = interval(1000).pipe(tap(()=>console.log('interval')));

  valorPromesa = new Promise<string>((resolve,reyect)=>{
    setTimeout(()=>{
      resolve('Tenemos dato de promesa');
    },3500);
  });
  constructor() { }

  ngOnInit(): void {
  }

  cambiarGenero(){
    if(this.genero==='femenino'){
      this.genero = 'masculino';
      this.nombre = 'Manuel'
    }else{
      this.genero = 'femenino';
      this.nombre = 'Bea'
    }
  }

  borrarCliente(){
    this.clientes.pop();
  }

}
