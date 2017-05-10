import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GoogleSheetService } from 'app/data/google-sheet.service';
import { ListinglistingComponent } from './listinglisting/listinglisting.component';
import { ListingComponent } from './listing/listing.component';

@NgModule({
  declarations: [
    AppComponent,
    ListinglistingComponent,
    ListingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    GoogleSheetService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
