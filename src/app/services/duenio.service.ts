import { Injectable } from '@angular/core';
import{ HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Duenio } from '../models/duenio';
@Injectable({
  providedIn: 'root'
})
export class DuenioService {

  private url = 'http://localhost:8080/duenio'

  constructor(private http: HttpClient) { }

  getAll():Observable<any>{
    return this.http.get(this.url)

  }
  save(d: Duenio): Observable<any> {
    return this.http.post(this.url, d)
  }
 

  delete(id: number): Observable<any>{
    return this.http.post(this.url + '/' + id + '/delete', null)
  }
  update(d: Duenio): Observable<any>{
    return this.http.post(this.url + '/' + d.id + '/update', null)
  }
}
