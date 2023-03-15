import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Country } from 'src/app/model/country.model';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent {
  countries :Array<Country>;
  constructor(private data :DataService,
    private dialogRef:MatDialogRef<NewComponent>,private http: HttpClient){
    this.countries = data.countries;
  }
  close(){
    this.dialogRef.close();
  }

  addNew(name:string,detail:string, url:string, country:number){
    let jsonObj = {
      name    :name,
      detail  :detail,
      url     :url,
      country :country
    }
    let jsonString = JSON.stringify(jsonObj);
    this.http.post(this.data.apiEndpoint+"/landmark",jsonString,
    {observe:'response'}).subscribe((response)=>{
      console.log(JSON.stringify(response.status));
      console.log(JSON.stringify(response.body));
      this.dialogRef.close();

    });
  }
}
