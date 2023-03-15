import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-ws';
  // constructor(private http:HttpClient){
  //   getLandmark();
  //   };
  //   console.log('Continue');
  //   setTimeout(()=>{
  //     obs.unsubscribe();
  //     console.log("Unsubscribed");
  //   },1500); // delay Time

  // }

  // async getLandmark(){
  //   console.log('Strart');

  //   let url = 'http://localhost/webapi/landmark';
  //   let obs = this.http.get(url).subscribe((data:any) => {
  //     console.log(data[0]);
  //     console.log('Complete');
  // }
}
