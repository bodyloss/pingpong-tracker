import {Game} from './game';

export class Match {
    public datePlayed: Date = new Date();
    public games: Array<Game> = [];
}
