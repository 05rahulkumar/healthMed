import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  images = [
    { src: 'https://assets-global.website-files.com/61eef5a30e49f6da8338f012/625874cd2876853a5bb7e997_1338268_HCTN%20-%20Website%20Blog%20Graphic_1_575x250_041122.jpg', alt: 'Image 1' },
    { src: 'https://as2.ftcdn.net/v2/jpg/05/77/84/27/1000_F_577842756_DWiS65lNLDG5DPaozrJk3c9TgkGGBwCb.jpg', alt: 'Image 2' },
    { src: 'https://cruzotec.com/wp-content/uploads/2021/05/Component-6-%E2%80%93-2.png', alt: 'Image 3' }
  ];

  constructor(config: NgbCarouselConfig) {
    // Customize default NgbCarouselConfig values if needed
    config.interval = 5000; // Set auto-rotation interval in milliseconds (default is 5000)
    config.wrap = true; // Set whether carousel should loop (default is true)
    config.keyboard = true; // Set whether keyboard navigation is enabled (default is true)
    config.pauseOnHover = true; // Set whether auto-rotation should pause on mouse hover (default is true)
  }
}
