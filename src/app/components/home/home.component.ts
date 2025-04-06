import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CarouselComponent } from '../../subcomponents/carousel/carousel.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CarouselComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  ngOnInit(): void {
    const dismissedTimestamp = localStorage.getItem('motibo_advert_dismissed_until');

    if (!dismissedTimestamp) {
      this.showModal = true;
    } else {
      const dismissedUntil = new Date(dismissedTimestamp);
      const now = new Date();
      this.showModal = now > dismissedUntil;
    }
  }

  dismissModal(): void {
    const now = new Date();
    const dismissedUntil = new Date(now.getTime() + 24 * 60 * 60 * 1000); // 24 hours from now
    localStorage.setItem('motibo_advert_dismissed_until', dismissedUntil.toISOString());
    this.showModal = false;
  }
  
  showModal = true;

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
