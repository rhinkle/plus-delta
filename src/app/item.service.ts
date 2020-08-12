import {Injectable} from '@angular/core';
import {FeedbackTypes, PdItem} from './pd-item';


const listOfItems: PdItem[] = [
  {
    id: 1,
    message: 'Message 1',
    feedbackType: FeedbackTypes.Delta
  },
  {
    id: 2,
    message: 'Message 2',
    feedbackType: FeedbackTypes.Delta
  },
  {
    id: 3,
    message: 'Message 3',
    feedbackType: FeedbackTypes.Delta
  }
];

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  constructor() { }

  public getItems(): PdItem[] {
    return listOfItems;
  }
}
