import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipePipe implements PipeTransform {

  transform(value: any, filterString: string) {
    if (value.length === 0 || filterString === '') {
      return value;
    }
    return value.filter((x: any) => x.Title.toLocaleLowerCase().includes(filterString)
      || x.Descreption.toLocaleLowerCase().includes(filterString));
  }

}
