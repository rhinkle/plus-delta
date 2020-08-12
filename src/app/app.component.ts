import {Component} from '@angular/core';
import {PdItemService} from './pd-item/pd-item.service';
import {FeedbackTypes, PdItem} from './pd-item/pd-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public items: PdItem[];

  constructor(private itemService: PdItemService) {
    this.items = this.itemService.getItems();
  }
}
