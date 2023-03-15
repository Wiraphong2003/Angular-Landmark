import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Country } from 'src/app/model/country.model';
import { DataService } from 'src/app/service/data.service';
import { NewComponent } from '../new/new.component';
import { Landmark } from 'src/app/model/landmark.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {
  countries :Array<Country>;
  selectedLandmark : Landmark;


  constructor(private data :DataService,
    private dialogRef:MatDialogRef<EditComponent>,
    private http: HttpClient){
    this.countries = data.countries;
    this.selectedLandmark = data.selectedLandmark;
  }
  close(){
    this.dialogRef.close();
  }
  save(name:string,detail:string,url:string,country:number,idx:number){
    let jsonObj = {
      name : name,
      detail :detail,
      url : url,
      country :country
    }
    let jsonString = JSON.stringify(jsonObj);
    this.http.put(this.data.apiEndpoint+"/landmark/"+idx,jsonString,{observe:'response'}).subscribe((response)=>{
      console.log(JSON.stringify(response.status));
      console.log(JSON.stringify(response.body));
      this.dialogRef.close();
    })
  }
}
