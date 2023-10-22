import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { ExportAsModule } from 'ngx-export-as';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    ExportAsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
