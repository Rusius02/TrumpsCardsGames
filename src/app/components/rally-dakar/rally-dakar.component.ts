import { Component } from '@angular/core';
import { Game } from '../../../logic/game';
import { Car } from '../../../model/car';
import { CarService } from '../../services/car/car.service';

@Component({
  selector: 'app-rally-dakar',
  standalone: true,
  imports: [],
  templateUrl: './rally-dakar.component.html',
  styleUrl: './rally-dakar.component.sass'
})
export class RallyDakarComponent {
  game!: Game;
  playerCard!: Car;
  aiCard!: Car;

  constructor(private carService: CarService) {}
  ngOnInit() {
    const cars = this.carService.getCars().map((car: any) => new Car(
      car.cat,
      car.model,
      car.max_speed,
      car.zero_to_hundred,
      car.power,
      car.engine_size,
      car.num_cylinders,
      car.regime
    ));
      this.game = new Game(cars);
      this.shuffleDeck();
      this.dealInitialCards();
  }

  playTurn(stat: keyof Car) {
    const result = this.game.playTurn(stat);
    if (!result) return;

    const { playerCard, aiCard, winner } = result;
    this.playerCard = playerCard;
    this.aiCard = aiCard;

    alert(`Winner of this round: ${winner}`);
  }

  shuffleDeck() {
    // Add your card shuffling logic here
  }
  dealInitialCards() {
    this.playerCard = this.game.playerDeck[0];
    this.aiCard = this.game.aiDeck[0];
  }
}
