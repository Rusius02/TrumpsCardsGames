import { Car } from '../model/car';

export class Game {
    public playerDeck: Car[];
    public aiDeck: Car[];

    constructor(private cars: Car[]) {
        this.playerDeck = [];
        this.aiDeck = [];
        this.shuffleAndDistribute();
    }

    private shuffleAndDistribute() {
        this.cars.sort(() => Math.random() - 0.5);
        const mid = Math.ceil(this.cars.length / 2);
        this.playerDeck = this.cars.slice(0, mid);
        this.aiDeck = this.cars.slice(mid);
    }

    public playTurn(playerChoice: keyof Car) {
        const playerCard = this.playerDeck.shift();
        const aiCard = this.aiDeck.shift();

        if (!playerCard || !aiCard) return;

        const playerStat = playerCard[playerChoice];
        const aiStat = aiCard[playerChoice];

        if (playerStat > aiStat) {
            this.playerDeck.push(playerCard, aiCard);
        } else {
            this.aiDeck.push(aiCard, playerCard);
        }

        return { playerCard, aiCard, winner: playerStat > aiStat ? "player" : "ai" };
    }
}

