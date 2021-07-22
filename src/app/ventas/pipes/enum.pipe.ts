import { Pipe, PipeTransform } from '@angular/core';
import { Color } from '../interfaces/ventas.interface';

@Pipe({
  name: 'enumCadena'
})
export class EnumPipe implements PipeTransform {

  transform(value: Color): string {
    return Color[value];
  }

}
