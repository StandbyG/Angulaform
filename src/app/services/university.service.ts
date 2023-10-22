import { University } from './../models/university';
import { Injectable } from '@angular/core';
import { environment } from 'src/enviroments/enviroments';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
const base_url = environment.base;
@Injectable({
  providedIn: 'root',
})
export class UniversityService {
  private url = `${base_url}/universidades`;
  private listaCambio = new Subject<University[]>();
  constructor(private http: HttpClient) {}
  list() {
    return this.http.get<University[]>(this.url);
  }

  insert(uni: University) {
    return this.http.post(this.url, uni);
  }

  setlist(listaNueva: University[]) {
    this.listaCambio.next(listaNueva);
  }

  getlist() {
    return this.listaCambio.asObservable();
  }
}
