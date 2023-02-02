import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameswap'
})
export class NameSwapPipe implements PipeTransform {
  firstName = '';
  lastName = ''
  transform(value: string): string {
      this.firstName=value.split(' ')[0]
      this.lastName=value.split(' ')[1]
      return this.lastName + " "+ this.firstName;  
  }
}
