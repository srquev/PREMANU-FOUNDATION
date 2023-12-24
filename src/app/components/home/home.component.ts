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
    const appData = this.premanuService.getAppData();
    console.log(appData, '<- home component');
  }
}
