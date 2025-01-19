import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-bike-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './bike-card.component.html',
  styleUrl: './bike-card.component.css'
})
export class BikeCardComponent {
  @Input() image: string = '';
  @Input() title: string = 'Default Title';
  @Input() price: string = "0.0";
  @Input() description: string = 'Default Description';
  @Input() buttonName: string = 'Click Me';
  @Input() buttonLink: string = '/';

}
