import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({providedIn: 'root'})
export class GifsService {

  public gifsList: Gif[] = [];

  private _tagHistory: string[] = [];
  private apyKey: string = 'vbFp8KK0GGyKOXGDDqFsL9G5P7DbNaen';
  private serviseURL: string = 'https://api.giphy.com/v1/gifs';

  constructor(private http: HttpClient) {
    this.loadLocalStorage();
    console.log('Gifs Service Ready');
  }

  get tagHistory(){
    return [...this._tagHistory];
  }

  private organizeHistory(tag:string){
    tag = tag.toLowerCase();

    if(this._tagHistory.includes(tag)){
      this._tagHistory = this._tagHistory.filter((oldTag) => oldTag !== tag)
    }

    this._tagHistory.unshift(tag);
    this._tagHistory = this.tagHistory.splice(0,10);
    this.saveLocalStorage();
  }

  private saveLocalStorage(): void{
    localStorage.setItem('history', JSON.stringify(this._tagHistory));
  }

  private loadLocalStorage():void {
    if(!localStorage.getItem('history')) return;

    this._tagHistory = JSON.parse( localStorage.getItem('history')! );

    if(this._tagHistory.length === 0 ) return;
    this.searchTag(this._tagHistory[0]);

  }
  searchTag(tag:string):void {
    if (tag.length === 0) return;
    this.organizeHistory(tag);

    const params = new HttpParams()
    .set('api_key', this.apyKey)
    .set('limit', '10')
    .set('q', tag);

    this.http.get<SearchResponse>(`${this.serviseURL}/search`,{params})
    .subscribe(resp => {
      this.gifsList = resp.data;
      //console.log({gifs: this.gifsList});
    });

    //fetch('http://api.giphy.com/v1/gifs/search?api_key=vbFp8KK0GGyKOXGDDqFsL9G5P7DbNaen&q=gato&limit=10').then( resp => resp.json()).then( data => console.log(data));


  }

}
