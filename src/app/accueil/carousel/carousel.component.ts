import { Component, OnInit } from '@angular/core';
import { Image } from './image.interface';

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  public images : Image[];

  constructor() { }

  ngOnInit() {
    this.images = [
      {"title": "Scrap1", "url": "app/img/scrap.jpg"},
      {"title": "Scrap2", "url": "app/img/scrap2.jpg"},
      {"title": "Scrap3", "url": "app/img/scrapbooking.jpg"},
      {"title": "Scrap4", "url": "app/img/scrap.jpg"},
      {"title": "Scrap5", "url": "app/img/scrap2.jpg"},
    ];
  }

}
