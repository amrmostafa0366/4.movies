import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent {
  @Input('movie') movie: any;

  constructor(private router: Router) { }

  onClick(title: string) {
    this.router.navigate(['/movie', title])
  }
}
