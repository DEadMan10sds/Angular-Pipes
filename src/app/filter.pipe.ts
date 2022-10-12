import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string): unknown {
    if(value.length === 0 ||filterString === '') return value;//Si la longitud es 0 (arreglo vacio) o si es un string vacio muestra todos
    const resultArray = [];
    for(let item of value)
    {
      if(item[propName] === filterString) resultArray.push(item);
    }
    return resultArray;
  }
}
