import { Component } from '@angular/core';
import { MovieService } from '../service/movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent {

  query!:string;
  searchResult:any;
  error:any;
  constructor(private route:ActivatedRoute,private service:MovieService){}

  ngOnInit(): void {
    this.getQuery();
  }
  getQuery(){
    this.route.paramMap.subscribe({
      next:(n)=>{
        this.query = n.get('query')!;
        console.log(this.query)
        this.search();
      }
    })
  }

  search() {
      this.service.getByTitle(this.query).subscribe({
        next: (n) => {
          this.searchResult = n;
          console.log(this.searchResult);

        },
        error: (e) => {
          this.error = e;
        }
      }
      )
  }
  onError(){
    this.error=null;
  }
}
