import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-get-involved',
  templateUrl: './get-involved.component.html',
  styleUrls: ['./get-involved.component.scss']
})
export class GetInvolvedComponent {

  public data="Your code is working properly";
  showMessage(){

    console.log("wasim chacha");
    window.alert(this.data);
  }

}
