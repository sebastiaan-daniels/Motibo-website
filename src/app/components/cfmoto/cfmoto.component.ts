import { Component } from '@angular/core';
import { CarouselComponent } from "../../subcomponents/carousel/carousel.component";
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-cfmoto',
  standalone: true,
  imports: [CarouselComponent, RouterModule],
  templateUrl: './cfmoto.component.html',
  styleUrl: './cfmoto.component.css'
})
export class CfmotoComponent {
  carouselImages: string[] = [
    '/cf-moto-carousel/car1.jpg',
    '/cf-moto-carousel/car2.jpg',
    '/cf-moto-carousel/car3.jpg',
  ];
}
