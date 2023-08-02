import { MovieService } from './../service/movie.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  popularMovies: any;
  @Input('search') search!: boolean;
  error: any;
  p:number =1;

  constructor(private service: MovieService) { }

  ngOnInit(): void {
    this.getPopular();
  }

  getPopular() {
    this.service.getAllPopular(this.p).subscribe({
      next: (n) => {
        this.popularMovies = n;
        console.log(this.popularMovies);

      },
      error: (e) => {
        this.error = e;
      }
    })
  }

  page(paginator:any){
   this.p = paginator.pageIndex +1;
   this.getPopular();
  }

}
