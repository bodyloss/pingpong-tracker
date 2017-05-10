import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/publishReplay';
import { Match } from 'app/data/match';
import { Game } from 'app/data/game';

@Injectable()
export class GoogleSheetService {
  private _data: any = null;

  constructor(private http: Http) { }

  load$(id: string): Observable<Array<Match>> {
    if (!this._data) {
      const url = `https://spreadsheets.google.com/feeds/list/${id}/od6/public/values?alt=json`;

      this._data = this.http.get(url)
        .map(res => res.json())
        .map(data => data.feed.entry)
        .map(entries => {
          const matches: Array<Match> = [];
          if (entries && entries.length > 0) {
            entries.forEach((entry: Array<any>, index: number) => {
              const match = new Match();

              match.datePlayed = new Date(entry['gsx$date'].$t);
              let i = 1;
              let score = null;
              while (score = entry[`gsx$score${i}`].$t) {
                const [player1, player2] = score.replace(/\s/g, '').split('-');
                match.games.push(new Game(player1, player2));
                i++;
              }
              matches.push(match);
            });
          }
          console.log(matches);
          return matches;
        })
        .publishReplay(1)
        .refCount();
    }

    return this._data;
  }
}
