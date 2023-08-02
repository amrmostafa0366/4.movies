import { Component, Input } from '@angular/core';

@Component({
  selector: 'review-card',
  templateUrl: './review-card.component.html',
  styleUrls: ['./review-card.component.css']
})
export class ReviewCardComponent {
  @Input('review')review!:any;

  modifyUrl(url:string){
    url.slice(0,1);
    console.log(url);
    
    return url;
  }
}
