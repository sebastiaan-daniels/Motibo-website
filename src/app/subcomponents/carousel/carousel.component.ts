import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})

export class CarouselComponent implements OnInit, OnDestroy {
  @Input() images: string[] = []; // Input to receive images
  currentSlide: number = 0;
  autoSlideInterval!: ReturnType<typeof setInterval>; // Reference for the interval

  ngOnInit() {
    this.startAutoSlide(); // Start auto-sliding when the component initializes
  }

  ngOnDestroy() {
    this.stopAutoSlide(); // Stop auto-sliding when the component is destroyed
  }

  startAutoSlide() {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 5000); // Slide every 5 seconds
  }

  stopAutoSlide() {
    clearInterval(this.autoSlideInterval);
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.images.length;
  }

  prevSlide() {
    this.currentSlide =
      (this.currentSlide - 1 + this.images.length) % this.images.length;
  }

  goTonextSlide() {
    this.nextSlide()
    this.stopAutoSlide()
  }

  goToprevSlide() {
    this.prevSlide()
    this.stopAutoSlide()
  }

  goToSlide(index: number) {
    this.currentSlide = index;
    this.stopAutoSlide(); // Reset auto-slide when manually navigating
  }
}