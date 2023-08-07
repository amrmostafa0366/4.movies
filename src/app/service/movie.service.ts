import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  url: string = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) { }


  getAllPopular(page?: number) {
    return this.http.get(`${this.url}/movie/popular?page=${page}`).pipe(
      catchError(this.errorHandler)
    )
  }
  getById(id: number) {
    return this.http.get(`${this.url}/movie/${id}`).pipe(
      catchError(this.errorHandler)
    )
  }
  getByTitle(title: string) {
    return this.http.get(`${this.url}/search/movie?query=${title}`).pipe(
      catchError(this.errorHandler)
    )
  }
  getImageByMovieId(id: number) {
    return this.http.get(`${this.url}/movie/${id}/images`).pipe(
      catchError(this.errorHandler)
    )
  }
  getReviewsByMovieId(id: number) {
    return this.http.get(`${this.url}/movie/${id}/reviews`).pipe(
      catchError(this.errorHandler)
    )
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.error)
  }

}
