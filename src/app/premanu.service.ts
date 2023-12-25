import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const url = '/assets/premanu-data.json';

@Injectable({
  providedIn: 'root'
})


export class PremanuService {
  appData = [];

  constructor(private http: HttpClient) { };

  /**
 * @description returns premanu data observable
 */
  getPremanuData() {
    return this.http.get(url);
  }


  getAppData() {
    return this.appData;
  }

  setAppData(data: any) {
    this.appData = data;
  }
}
