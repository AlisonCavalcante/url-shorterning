import { Constantes } from './../../shared/Constantes';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor(private http: HttpClient) { }

  getUrl(url: string): Observable<any>{
    return this.http.get<any>(Constantes.URL_GET + `${url}`);
  }

}
