import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CarouselComponent } from '../../subcomponents/carousel/carousel.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CarouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  carouselImages: string[] = [
    '/home-carousel/car1.jpg',
    '/home-carousel/car2.jpg',
    '/home-carousel/car3.jpg',
    '/home-carousel/car4.jpg',
    '/home-carousel/car5.jpg',
  ];

  carousel2Images: string[] = [
    '/home2-carousel/car1.jpg',
    '/home2-carousel/car2.jpg',
    '/home2-carousel/car3.jpg',
  ]

  carousel3Images: string[] = [
    '/home3-carousel/car1.jpg',
    '/home3-carousel/car2.jpg',
    '/home3-carousel/car3.jpg',
  ]
    router = new Router;
}
