import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-bike-card-extern',
  standalone: true,
  imports: [],
  templateUrl: './bike-card-extern.component.html',
  styleUrl: './bike-card-extern.component.css'
})
export class BikeCardExternComponent {
  @Input() image: string = '';
  @Input() title: string = 'Default Title';
  @Input() price: string = "0.0";
  @Input() description: string = 'Default Description';
  @Input() buttonName: string = 'Click Me';
  @Input() buttonLink: string = '/';
  @Input() deal: string ="";
}
