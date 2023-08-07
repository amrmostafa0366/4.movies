import { Component, Input } from '@angular/core';
import { MovieService } from '../service/movie.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent {
  @Input('search')search:any;
  query!: string;
  searchResult: any;
  error: any;
  constructor(private route: ActivatedRoute, private service: MovieService) { }

  ngOnInit(): void {
    // this.getQuery();
    this.route.paramMap.pipe(
      switchMap((param) => {
        this.query = param.get('query')!;
        return this.service.getByTitle(this.query);
      })
    ).subscribe({
      next: (searchResult) => {
        this.searchResult = searchResult;
        console.log(this.searchResult.results.length);
        
      },
      error: (e) => {
        this.error = e;
      }
    })
  }
  // getQuery(){
  //   this.route.paramMap.subscribe({
  //     next:(n)=>{
  //       this.query = n.get('query')!;
  //       console.log(this.query)
  //       this.search();
  //     }
  //   })
  // }

  // search() {
  //     this.service.getByTitle(this.query).subscribe({
  //       next: (n) => {
  //         this.searchResult = n;
  //         console.log(this.searchResult);

  //       },
  //       error: (e) => {
  //         this.error = e;
  //       }
  //     }
  //     )
  // }
  onError() {
    this.error = null;
  }
}
