import { Component, OnInit } from '@angular/core';
import { PremanuService } from './premanu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public premanuData: any = [];

  constructor(private premanuService: PremanuService) {
  }


  ngOnInit(): void {
    this.getPremanuData();
  }

  /**
   * @description get all premanu data
   */
  getPremanuData() {
    this.premanuService.getPremanuData().subscribe(
      (data) => {
        this.premanuService.setAppData(data);
        console.log(data, '<-premanuu data');
      }
    )
  }
}
