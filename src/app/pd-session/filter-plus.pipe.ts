import { Pipe, PipeTransform } from '@angular/core';
import {FeedbackTypes, PdItem} from '../pd-item/pd-item';

@Pipe({
  name: 'filterPlus'
})
export class FilterPlusPipe implements PipeTransform {
  transform(pdItems: PdItem[]): PdItem[] {
    if (!pdItems) {
      return pdItems;
    }
    return pdItems.filter(item => item.feedbackType === FeedbackTypes.Delta);
  }
}
