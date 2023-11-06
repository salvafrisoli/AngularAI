import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ HttpClientModule} from '@angular/common/http'


import { AppComponent } from './app.component';
import { AutoComponent } from './components/auto/auto.component';
import { DuenioComponent } from './components/duenio/duenio.component';

@NgModule({
  declarations: [
    AppComponent,
    AutoComponent,
    DuenioComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
