import { Component, Input } from '@angular/core';
import { MovieService } from '../service/movie.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchResult: any;
  error = null;

  form= new FormGroup({
    query: new FormControl('',Validators.required)
  });

  constructor(private service: MovieService,private route:Router) { }

  get query(){
    return this.form.get(['query']);
  }
  

  search() {
    // if (!input.value !== undefined)
      this.service.getByTitle(this.query?.value).subscribe({
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
  clear() {
    this.query?.reset('');
    this.searchResult=[];
  }
  onSearch(){
      this.route.navigate(['/search',this.query?.value]);
      this.clear();
  }
}
