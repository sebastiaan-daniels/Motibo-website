import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-ad-modal',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './ad-modal.component.html',
  styleUrl: './ad-modal.component.css'
})

export class AdModalComponent implements OnInit, OnDestroy {
  @Input() image: string = '';
  showModal = true;

  ngOnInit(): void {
    const dismissedTimestamp = localStorage.getItem('motibo_advert_dismissed_until');

    if (!dismissedTimestamp) {
      this.showModal = true;
    } else {
      const dismissedUntil = new Date(dismissedTimestamp);
      const now = new Date();
      this.showModal = now > dismissedUntil;
    }

    // Disable scrolling when modal is visible
    // if (this.showModal) {
    //   document.body.style.overflow = 'hidden';
    // }
  }

  ngOnDestroy(): void {
    // Reset the overflow property when the component is destroyed
    document.body.style.overflow = '';
  }

  dismissModal(): void {
    const now = new Date();
    const dismissedUntil = new Date(now.getTime() + 24 * 60 * 60 * 1000); // 24 hours from now
    localStorage.setItem('motibo_advert_dismissed_until', dismissedUntil.toISOString());
    this.showModal = false;

    // Re-enable scrolling when modal is dismissed
    document.body.style.overflow = '';
  }

  showAdvertAgain(): void {
    this.showModal = true;
    // Disable scrolling again if the advert is displayed
    document.body.style.overflow = 'hidden';
  }

  router = new Router();
}
