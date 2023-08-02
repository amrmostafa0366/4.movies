import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  url: string = 'https://api.themoviedb.org/3';
  headers = new HttpHeaders({
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMmM2YWIwM2YxYmIxNTc3ZjU0NzgyZjkwNzk4ZjNlMCIsInN1YiI6IjY0YzhiZjJjODlmNzQ5MDEwN2MwYmQ3YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Nvly8B-YGbk5qE9HSYBFtQGaNZYmkzNbsSnya1qyQE8'
  });

  constructor(private http: HttpClient) { }


  getAllPopular() {
    return this.http.get(`${this.url}/movie/popular`,
      { headers: this.headers }).pipe(
        catchError(this.errorHandler)
      )
  }
  getById(id: number) {
    return this.http.get(`${this.url}/movie/${id}`,
      { headers: this.headers }).pipe(
        catchError(this.errorHandler)
      )
  }
  getByTitle(title: string) {
    return this.http.get(`${this.url}/search/movie?query=${title}`,
      { headers: this.headers }).pipe(
        catchError(this.errorHandler)
      )
  }
  getImageByMovieId(id: number) {
    return this.http.get(`${this.url}/movie/${id}/images`,
      { headers: this.headers }).pipe(
        catchError(this.errorHandler)
      )
  }
  getReviewsByMovieId(id: number) {
    return this.http.get(`${this.url}/movie/${id}/reviews`,
      { headers: this.headers }).pipe(
        catchError(this.errorHandler)
      )
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.error)
  }

}
