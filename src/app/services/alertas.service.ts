import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertasService {

  constructor(public http: HttpClient) { }

  getPublications(){
    return this.http.get('https://apifb.azurewebsites.net/api/publicaciones?code=E1nkaZdtrSxSDTOiYgSp9LxXpP0v4BjDDOeaKGePpVYWkp/J2EGA5A==',{
      headers: {
        'method': 'GET',
        'Accept': '*/*',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'
      }
});
}

}
