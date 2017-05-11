import { Player } from "app/data/player.enum";
import { Score } from "app/data/Score";

export class Match {

    public readonly total:Score;

    constructor(public readonly datePlayed: Date, public readonly games: Array<Score>) {
        this.total = games.reduce((prev, curr) => {
            let player1Score = curr.winner === Player.One ? prev.player1 + 1 : prev.player1;
            let player2Score = curr.winner === Player.Two ? prev.player2 + 1 : prev.player2;
            return new Score(player1Score, player2Score);
        }, new Score(0, 0));
    }

}
