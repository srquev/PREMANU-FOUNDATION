import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { assertIsDefined } from '../assert';

@Component({
  selector: 'app-hamburger',
  templateUrl: './hamburger.component.html',
  styleUrls: ['./hamburger.component.scss']
})
export class HamburgerComponent implements OnInit, AfterViewInit {
  @Input() showHamburger: boolean = false;
  @Output() hamBurgerAction: EventEmitter<boolean> = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // this.initializeHamburger();
  }

  toggleHamburger(){
    this.showHamburger = !this.showHamburger;
    this.hamBurgerAction.emit(this.showHamburger);
  }

  initializeHamburger() {
    var x = document.getElementById("myLinks") as any;
    // assertIsDefined(x, 'x is possibly null')
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }

  }
}
