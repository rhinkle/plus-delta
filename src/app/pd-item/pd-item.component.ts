import {Component, Input} from '@angular/core';
import {PdItem} from './pd-item';

@Component({
  selector: 'app-pd-item',
  templateUrl: './pd-item.component.html',
  styleUrls: ['./pd-item.component.scss']
})
export class PdItemComponent {
  @Input() pdItem: PdItem;
}
