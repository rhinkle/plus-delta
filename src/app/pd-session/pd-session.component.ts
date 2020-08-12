import { Component, OnInit } from '@angular/core';
import {PdItemService} from '../pd-item/pd-item.service';
import {PdItem} from '../pd-item/pd-item';

@Component({
  selector: 'app-pd-session',
  templateUrl: './pd-session.component.html',
  styleUrls: ['./pd-session.component.scss']
})
export class PdSessionComponent implements OnInit {
  public pdItems: PdItem[];

  constructor(private itemService: PdItemService) {}

  ngOnInit(): void {
    this.pdItems = this.itemService.getItems();
  }
}
