import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { ColorComponent } from './color/color.component';
import { TwoWayComponent } from './two-way/two-way.component';
import {FormsModule} from '@angular/forms';
import { CardComponent } from './card/card.component';
import { PereComponent } from './pere/pere.component';
import { FilsComponent } from './fils/fils.component';
import { CvComponent } from './cv/cv/cv.component';
import { ListComponent } from './cv/list/list.component';
import { ItemComponent } from './cv/item/item.component';
import { DetailComponent } from './cv/detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    ColorComponent,
    TwoWayComponent,
    CardComponent,
    PereComponent,
    FilsComponent,
    CvComponent,
    ListComponent,
    ItemComponent,
    DetailComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
