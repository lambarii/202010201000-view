import { Pipe, PipeTransform } from '@angular/core';
import { Veiculo } from '../veiculo'

@Pipe({
    name: 'tableFilter'
  })
  export class TableFilterPipe implements PipeTransform {

    transform(list: Veiculo[], value: string) {
      return value ? list.filter(item => item.classificacao === value) : list;
    }

}