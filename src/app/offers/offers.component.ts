import { Component } from '@angular/core';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent {
  // backgroundImagePath ='../../assets/images/Kitchen-offers.jpg';
  images: string[]=[
    'Beauty-offers.jpg',
    'Kitchen-offers.jpg',
    'buds-offers.jpg',
    'dailyneeds-offers.jpg',

  ];
  currentIndex =0;  
  get currentImage(): string {
    return `../assets/images/${this.images[this.currentIndex]}`;
  }
  prevImage():void{
    this.currentIndex = (this.currentIndex + 1) %  this.images.length;
  }
  nextImage(): void{
    this.currentIndex = (this.currentIndex -1 + this.images.length) % this.images.length; 
  }
}
