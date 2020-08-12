import {Component, Input, OnInit} from '@angular/core';
import {PdItem} from '../../pd-item/pd-item';

@Component({
  selector: 'app-pd-list',
  templateUrl: './pd-list.component.html',
  styleUrls: ['./pd-list.component.scss']
})
export class PdListComponent {
  @Input() title: string;
  @Input() pdItems: PdItem[];
}
