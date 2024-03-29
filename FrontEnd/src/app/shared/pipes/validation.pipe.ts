import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'validation',
})
export class ValidationPipe implements PipeTransform {
  transform(value: any, errorObject: Object) {
    return value[Object.keys(errorObject)[0]];
  }
}
