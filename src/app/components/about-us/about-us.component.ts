import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CarouselComponent } from '../../subcomponents/carousel/carousel.component';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [RouterModule, CarouselComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {
  carouselImages: string[] = [
    '/about-us-carousel/car1.jpg',
    '/about-us-carousel/car2.jpg',
    '/about-us-carousel/car3.jpg',
  ];
  router = new Router;
}
