import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


export interface Mobile {
  mobile: string;
  price: number;
  ram: number;
  storage: number;
}

@Injectable({
  providedIn: 'root'
})
export class MobileService {

  constructor(private http:HttpClient) { }

  private mobileData: Mobile[] = [
    { mobile: 'Phone A', price: 15000, ram: 4, storage: 64 },
    { mobile: 'Phone B', price: 20000, ram: 6, storage: 128 },
    { mobile: 'Phone C', price: 25000, ram: 8, storage: 256 }
  ];

  getMobileData() {
    return of(this.mobileData);
    // return this.http.get(this.mobileData)
  }

  deleteMobile(mobile: Mobile): Observable<Mobile[]> {
    this.mobileData = this.mobileData.filter(m => m !== mobile);
    return of(this.mobileData);
  }
}
