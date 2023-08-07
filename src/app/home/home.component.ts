import { Observable } from 'rxjs';
import { SharedData } from '../service/shared.service';
import { MovieService } from './../service/movie.service';
import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // search$!: Observable<string>; 
  // searchValue:string='';
  popularMovies: any;
  error: any;
  p: number = 1;

  constructor(private service: MovieService) { }

  ngOnInit(): void {
    this.getPopular();
    // this.search$ = this.shared.search$;
    // this.search$.subscribe((searchValue) => {
    //   console.log('changed', searchValue);
    //   this.searchValue = searchValue;
    // });
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

  page(paginator: any) {
    this.p = paginator.pageIndex + 1;
    this.getPopular();
  }

}
