import {Component} from '@angular/core';
import {ItemService} from './item.service';
import {FeedbackTypes, PdItem} from './pd-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'plus-delta';
  public items: PdItem[];

  constructor(private itemService: ItemService) {
    this.items = this.itemService.getItems();
  }

  public listDeltas(): PdItem[]{
    return this.items.filter((item) => item.feedbackType = FeedbackTypes.Delta);
  }

  public listPlus(): PdItem[]{
    return this.items.filter((item) => item.feedbackType = FeedbackTypes.Plus);
  }
}
