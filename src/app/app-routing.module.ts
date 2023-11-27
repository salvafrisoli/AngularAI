import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AutoComponent } from './components/auto/auto.component';
import { DuenioComponent } from './components/duenio/duenio.component';
import { NgModule } from '@angular/core';
const routes: Routes = [
    { path: 'duenio', component: DuenioComponent },
    { path: 'auto', component: AutoComponent }
];
@NgModule({

    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }