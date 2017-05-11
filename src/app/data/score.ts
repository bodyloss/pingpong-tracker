import { Player } from "app/data/player.enum";

export class Score {
    public readonly winner: Player; 

    constructor(public player1: number, public player2: number) {
        this.winner = player1 > player2 ? Player.One : Player.Two;
    }
}