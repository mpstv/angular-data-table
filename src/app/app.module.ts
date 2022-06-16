import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DataTableModule } from './components/data-table/data-table.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, DataTableModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
