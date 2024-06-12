import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.sass'
})
export class WelcomeComponent {

  constructor(private router: Router) { }

  navigateToGame(game: string): void {
    this.router.navigate(['/game', game]);
  }
}
