import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { RouterModule } from '@angular/router';
import { MovieComponent } from './movie/movie.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SearchComponent } from './search/search.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReviewCardComponent } from './review-card/review-card.component';
import { ShortenPipe } from './pipe/shorten.pipe';
import { SearchPageComponent } from './search-page/search-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieComponent,
    MovieCardComponent,
    NotFoundComponent,
    SearchComponent,
    NavbarComponent,
    ReviewCardComponent,
    ShortenPipe,
    SearchPageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'movie/:id', component:MovieComponent},
      { path: 'search/:query', component:SearchPageComponent},
      {path:'**',component:NotFoundComponent}
    ]),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
