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
import { NgstyleComponent } from './directives/ngstyle/ngstyle.component';
import { MiniWordComponent } from './mini-word/mini-word.component';
import { NgclassExampleComponent } from './directives/ngclass-example/ngclass-example.component';
import { HighlightDirective } from './directives/highlight.directive';
import { RainbowDirective } from './directives/rainbow.directive';
import { DefaultImagePipe } from './pipes/default-image.pipe';
import {LoggerService} from './services/logger.service';
import { TodoComponent } from './todo/todo.component';
import { HeaderComponent } from './header/header.component';
import { RouterSimulatorComponent } from './router-simulator/router-simulator.component';
import { TestRoutesParamsComponent } from './test-routes-params/test-routes-params.component';
import { DetailPersonneComponent } from './cv/detail-personne/detail-personne.component';
import { NF404Component } from './nf404/nf404.component';

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
    DetailComponent,
    NgstyleComponent,
    MiniWordComponent,
    NgclassExampleComponent,
    HighlightDirective,
    RainbowDirective,
    DefaultImagePipe,
    TodoComponent,
    HeaderComponent,
    RouterSimulatorComponent,
    TestRoutesParamsComponent,
    DetailPersonneComponent,
    NF404Component
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
