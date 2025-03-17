import { Component } from '@angular/core';
import { CarouselComponent } from "../../subcomponents/carousel/carousel.component";
import { Router, RouterModule } from '@angular/router';
import { BikeCardComponent } from "../../subcomponents/bike-card/bike-card.component";
import { BikeCardExternComponent } from '../../subcomponents/bike-card-extern/bike-card-extern.component';


@Component({
  selector: 'app-gts-scooters',
  standalone: true,
  imports: [CarouselComponent, RouterModule, BikeCardExternComponent],
  templateUrl: './gts-scooters.component.html',
  styleUrl: './gts-scooters.component.css'
})
export class GtsScootersComponent {
  carouselImages: string[] = [
    '/gts-carousel/car1.webp',
    '/gts-carousel/car2.webp',
    '/gts-carousel/car3.webp',
  ];
}
