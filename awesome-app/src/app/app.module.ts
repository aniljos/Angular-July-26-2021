import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TempratureConverterComponent } from './converter/temprature-converter.component';
import { DataBindingComponent } from './databinding/databinding.componet';
import { HelloComponent } from './hello/hello.component';

@NgModule({
  declarations: [
    AppComponent, HelloComponent, DataBindingComponent, TempratureConverterComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
