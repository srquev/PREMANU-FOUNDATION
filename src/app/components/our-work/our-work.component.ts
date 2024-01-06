import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-our-work',
  templateUrl: './our-work.component.html',
  styleUrls: ['./our-work.component.scss']
})
export class OurWorkComponent {

  constructor(private router: Router) {}

  navigateToPage(page: string): void {
    
    this.router.navigate([`/${page}`]);
  }
}

