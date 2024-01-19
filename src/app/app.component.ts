import { AfterViewInit, Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { PremanuService } from './premanu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  public premanuData: any = [];
  deviceWidth: number = 0;
  toggleMenuList: boolean = false;

  constructor(private premanuService: PremanuService,
    private rendrer: Renderer2, private element: ElementRef) {
  }


  ngAfterViewInit(): void {
    this.deviceWidth = this.rendrer.parentNode(this.element.nativeElement).ownerDocument.defaultView.innerWidth
  }


  ngOnInit(): void {
    // this.getPremanuData();
  }


  /**
   * get display/hide flag
   * @param event
   */
  hamBurgerEvent(event: any){
    this.toggleMenuList = event;
    console.log(event,'event type');
  }

  /**
   * @description get all premanu data
   */
  // getPremanuData() {
  //   this.premanuService.getPremanuData().subscribe(
  //     (data) => {
  //       this.premanuService.setAppData(data);
  //       console.log(data, '<-premanuu data');
  //     }
  //   )
  // }
}
