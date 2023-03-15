import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Convert as landmarkCvt , Landmark } from 'src/app/model/landmark.model';
import { Convert  as countryCvt , Country } from 'src/app/model/country.model';
import { MatListOption } from '@angular/material/list';
import { MatDialog } from '@angular/material/dialog';
import { NewComponent } from '../new/new.component';
import { EditComponent } from '../edit/edit.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  landmarks = Array<Landmark>();
  countries = Array<Country>();
  selectedLandmark: any;
  constructor(private dataServive: DataService,private http: HttpClient,
    private dialog:MatDialog){
    http.get(dataServive.apiEndpoint +"/landmark").subscribe((data:any)=>{
      this.landmarks = landmarkCvt.toLandmark(JSON.stringify(data));
      console.log(this.landmarks);
    });
    http.get(dataServive.apiEndpoint+"/country").subscribe((data:any)=>{
      this.countries = countryCvt.toCountry(JSON.stringify(data));
      console.log(this.countries);

    });
  }

  edit(){
      this.dataServive.selectedLandmark = this.selectedLandmark;
      this.dataServive.countries = this.countries;
      this.dialog.open(EditComponent,{
        minWidth: '300px',
      })
    }

  addNew(){
    this.dataServive.countries = this.countries;
    this.dialog.open(NewComponent,{
      minHeight:'30px',
    });
  }
  
  findAll(){
    this.http.get(this.dataServive.apiEndpoint +"/landmark")
    .subscribe(data =>{
      this.landmarks = landmarkCvt.toLandmark(JSON.stringify(data))
    });
  }

  findByCountry(name:string){
    this.http.get(this.dataServive.apiEndpoint+"/landmark/country/"+name).subscribe
    (data => {
      this.landmarks = landmarkCvt.toLandmark(JSON.stringify(data))
    })
  }

  show(option :MatListOption){
    this.selectedLandmark = option.value;
    console.log(this.selectedLandmark);
  }
  delete(id:number){
    if(confirm("ยืนยืนการลบข้อมูล ? ")){
      this.http.delete(this.dataServive.apiEndpoint+"/landmark/"+id)
      .subscribe((res) => {
        console.log(res);
      });
    }
  }
}
