import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VvserviceService {

  constructor(private http: HttpClient) { }

  getAnActivity(): Observable<VVActivity> {
    return this.http.get<VVActivity>("https://www.boredapi.com/api/activity");
  }
}

export interface VVActivity {
  activity: string;
  type: string;
  participants: number;
  price: number;
  link: string;
  key: string;
  accessibility: number;
}
