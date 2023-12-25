import { Component, OnInit } from '@angular/core';
import { PremanuService } from 'src/app/premanu.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private premanuService: PremanuService) {
  }

  ngOnInit() {
    this.getPremanuData();
  }

  /**
  * @description get all premanu data
  */
  getPremanuData() {
    const appData = this.premanuService.getAppData() as any;
    if (appData.aboutus) {
      console.log(appData, '<- home component - it did not call the api');
    } else {
      //get data from json file
      this.premanuService.getPremanuData().subscribe(
        (data) => {
          this.premanuService.setAppData(data);
          console.log(data, '<-api call, premanuu data');
        }
      )
    }
  }
}
