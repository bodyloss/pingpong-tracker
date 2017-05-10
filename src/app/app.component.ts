import { Component } from '@angular/core';
import { GoogleSheetService } from 'app/data/google-sheet.service';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs/Observable';
import { Match } from 'app/data/match';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  errorMessage: any;
  matches: Array<Match> = [];

  constructor(private googleSheetService: GoogleSheetService) {
    googleSheetService.load$(environment.sheetId)
      .subscribe(
        matches => this.matches = matches
      );
  }
}
