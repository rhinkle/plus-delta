import {Injectable} from '@angular/core';
import {FeedbackTypes, PdItem} from './pd-item';


const listOfItems: PdItem[] = [
  {
    id: 1,
    message: 'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
    feedbackType: FeedbackTypes.Delta
  },
  {
    id: 2,
    message: ' Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.',
    feedbackType: FeedbackTypes.Plus
  },
  {
    id: 3,
    message: 'Bring to the table win-win survival strategies to ensure proactive domination',
    feedbackType: FeedbackTypes.Delta
  }
];

@Injectable({
  providedIn: 'root'
})
export class PdItemService {
  constructor() { }

  public getItems(): PdItem[] {
    return listOfItems;
  }
}
