import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dishSearchFilter'
})
export class DishSearchFilterPipe implements PipeTransform {

  transform(dishArray: any, filterKeyword: string): any {
    if (dishArray.length === 0 || filterKeyword === '') {
      return dishArray;
    }
    const resultArray = [];
    for (const dish of dishArray) {
      if (dish.keywords.includes(filterKeyword)) {
        resultArray.push(dish);
      }
    }
    return resultArray;
  }

}
