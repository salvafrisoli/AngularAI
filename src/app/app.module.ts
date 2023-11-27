import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';
import{ HttpClientModule} from '@angular/common/http'
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { AutoComponent } from './components/auto/auto.component';
import { DuenioComponent } from './components/duenio/duenio.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    AutoComponent,
    DuenioComponent,
    
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
