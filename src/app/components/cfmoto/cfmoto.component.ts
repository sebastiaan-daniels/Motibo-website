import { Component } from '@angular/core';
import { CarouselComponent } from "../../subcomponents/carousel/carousel.component";
import { Router, RouterModule } from '@angular/router';
import { BikeCardComponent } from "../../subcomponents/bike-card/bike-card.component";

@Component({
  selector: 'app-cfmoto',
  standalone: true,
  imports: [CarouselComponent, RouterModule, BikeCardComponent],
  templateUrl: './cfmoto.component.html',
  styleUrl: './cfmoto.component.css'
})
export class CfmotoComponent {
  carouselImages: string[] = [
    '/cf-moto-carousel/car1.jpg',
    '/cf-moto-carousel/car2.jpeg',
    '/cf-moto-carousel/car3.jpeg',
    '/cf-moto-carousel/car4.jpg',
    '/cf-moto-carousel/car5.jpg',
  ];
}
