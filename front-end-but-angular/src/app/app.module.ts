import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent
    // RockGeneratorButtonComponent
    // RockItemComponent
    // RockListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
