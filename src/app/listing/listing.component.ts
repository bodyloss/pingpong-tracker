import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Match } from 'app/data/match';
import { Player } from "app/data/player.enum";


@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListingComponent {
  @Input() matches: Array<Match>;
  public player = Player;

  constructor() { }
}
