import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent {
  id!: number;
  movie!: any;
  error!:any;
  reviews!:any
  constructor(private route: ActivatedRoute, private service: MovieService) { }

  ngOnInit(): void {
    this.getId();
  }
  getId() {
    this.route.paramMap.subscribe({
      next:(n)=>{
        this.id = +n.get('id')!;
        console.log(this.id);
        this.getById();
        this.getReviews();
      },
      error:(e)=>{
        this.error = e;
      }
    })
  }
  getById(){
    this.service.getById(this.id).subscribe({
      next:(n)=>{
        this.movie = n;
      },
      error:(e)=>{
        console.log(e);
        console.log(this.error);
      }
    })
  }
  getReviews(){
    this.service.getReviewsByMovieId(this.id).subscribe({
      next:(n)=>{
        this.reviews = n;
        console.log(n)
      },
      error:(e)=>{
        this.error =e;
      }
    })
  }
}
