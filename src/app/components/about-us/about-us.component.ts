import { Component, OnInit } from '@angular/core';
import { PremanuService } from 'src/app/premanu.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit{
  public appData  = null;
  allMissions: any;
  allDefinitions: any;
  allVisions: any;
  public showSpinner = false;
  constructor(private pmService: PremanuService) { }

  ngOnInit(){
    this.getPremanuData();
  }

  /**
  * @description get all premanu data
  */
  getPremanuData() {
    this.showSpinner = true;
    const appData = this.pmService.getAppData() as any;
    if(appData.aboutus){
      this.showSpinner = false;
      this.appData = appData;
      this.allMissions = appData.aboutus.missions;
      this.allDefinitions = appData.aboutus.definition;
      this.allVisions = appData.aboutus.vision;
      console.log(appData, '<- data is available in about us component')
    } else {
      this.pmService.getPremanuData().subscribe((data:any)=> {
        this.showSpinner = false;
        this.appData = data;
        this.allMissions = data.aboutus.missions;
        this.allDefinitions = data.aboutus.definition;
        this.allVisions = data.aboutus.vision;
        console.log(data, 'about us component, api call');
        this.pmService.setAppData(data);
      })
    }
  }

}
