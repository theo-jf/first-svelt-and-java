import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './components/Main/main.component';
import { RockGeneratorButtonComponent } from './components/RockGeneratorButton/rockgeneratorbutton.component';
import { RockItemComponent } from './components/RockItem/rockitem.component';
import { RockListComponent } from './components/RockList/rocklistcomponent';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    RockGeneratorButtonComponent,
    RockItemComponent,
    RockListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
