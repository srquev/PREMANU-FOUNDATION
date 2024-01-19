
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-spinner',
  template: `
    <div *ngIf="loading" class="loader-container">
      <!-- Your loader/spinner HTML/CSS goes here -->
      <div class="loader"></div>
    </div>
  `,
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent {
  @Input() loading: boolean = false;
}

