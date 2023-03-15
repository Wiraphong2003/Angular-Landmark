import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiEndpoint = 'http://localhost:9999/webapi';
  countries:any;
  selectedLandmark : any;
  constructor() {

   }
}
