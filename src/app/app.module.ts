import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; // Добавлено
import { FormsModule } from '@angular/forms'; // Добавлено

import { AppComponent } from './app.component';
import { ConverterComponent } from './components/converter/converter.component';

@NgModule({
  declarations: [
    AppComponent,
    ConverterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // Добавлено
    FormsModule // Добавлено
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }