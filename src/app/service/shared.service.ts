import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedData {
  private _search!: string;
  private searchSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor() { }

  set search(query: string) {
    this._search = query;
    console.log('used', this._search);
    this.searchSubject.next(query);
  }

  get search() {
    return this._search;
  }

  get search$(): Observable<string> {
    return this.searchSubject.asObservable();
  }
}
