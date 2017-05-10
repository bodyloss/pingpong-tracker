import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GoogleSheetService } from 'app/data/google-sheet.service';
import { ListingComponent } from './listing/listing.component';
import { WinsComponent } from './wins/wins.component';

const routes: Routes = [
  {
    path: 'wins',
    component: WinsComponent,
  },
  {
    path: 'point-difference',
    component: WinsComponent
  },
  { path: '',
    redirectTo: '/wins',
    pathMatch: 'full'
  },
];

@NgModule({
  declarations: [
    AppComponent,
    ListingComponent,
    WinsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    GoogleSheetService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
