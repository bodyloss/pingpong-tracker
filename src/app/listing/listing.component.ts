import { Component, OnInit, Input } from '@angular/core';
import { Match } from 'app/data/match';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  @Input() matches: Array<Match>;

  constructor() { }

  ngOnInit() {
  }

}
