import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-box',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      box works!
    </p>
  `,
  styleUrls: ['./box.component.css']
})
export class BoxComponent {

}
