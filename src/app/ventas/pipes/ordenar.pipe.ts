import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/ventas.interface';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(heroes: Heroe[], order: string ='sin valor'): Heroe[] {
    order = order.toLowerCase();
    // if(order.trim().length>0&&order!=='sin valor'){
    //   heroes.sort((a,b)=> (a.nombre>b.nombre) ? 1: -1);
      
    //   order === 'nombre' ? heroes.sort((a,b)=> (a.nombre>b.nombre) ? 1: -1) :
    //   order === 'color' ? heroes.sort((a,b)=> (a.color.toString()>b.color.toString()) ? 1: -1) :
    //   order === 'vuela' ? heroes.sort((a,b)=> (a.vuela<b.vuela) ? 1: -1) :
    //   heroes = heroes;
    // }
    // return heroes;
    switch( order ){

      case 'nombre':
        return heroes.sort((a,b)=> (a.nombre>b.nombre)? 1: -1);

      case 'vuela':
        return heroes.sort((a,b)=> (a.vuela>b.vuela)? -1: 1);

      case 'color':
        return heroes.sort((a,b)=> (a.color>b.color)? 1: -1);

      default:
        return heroes;
    }
  }

}
