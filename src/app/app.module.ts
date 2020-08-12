import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FilterPlusPipe } from './pd-session/filter-plus.pipe';
import { FilterDeltaPipe } from './pd-session/filter-delta.pipe';
import { PdItemComponent } from './pd-item/pd-item.component';
import { PdSessionComponent } from './pd-session/pd-session.component';
import { PdListComponent } from './pd-session/pd-list/pd-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilterPlusPipe,
    FilterDeltaPipe,
    PdItemComponent,
    PdSessionComponent,
    PdListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
