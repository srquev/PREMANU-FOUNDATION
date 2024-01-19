import { Component, OnInit } from '@angular/core';
import { assertIsDefined } from 'src/app/assert';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CustomCarouselComponent implements OnInit{
  slides: any[] = new Array(3).fill({id: -1, src: '', title: '', subtitle: ''});

   slideIndex = 1;

  constructor() {};

  ngOnInit(): void {
    // this.initializeCarousel();
    this.showSlides(this.slideIndex);
    this.slides[0] = {
      id: 0,
      src: './assets/img/angular.jpg',
      title: 'First slide',
      subtitle: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
    };
    this.slides[1] = {
      id: 1,
      src: './assets/img/react.jpg',
      title: 'Second slide',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }
    this.slides[2] = {
      id: 2,
      src: './assets/img/vue.jpg',
      title: 'Third slide',
      subtitle: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
    }
  }


   plusSlides(n: number) {
    this.showSlides(this.slideIndex += n);
  }
  
   currentSlide(n: number) {
    this.showSlides(this.slideIndex = n);
  }

   showSlides(n: number) {
    let i;
    let slides = Array.from(document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>);
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {this.slideIndex = 1}    
    if (n < 1) {this.slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[this.slideIndex-1].style.display = "block";  
    dots[this.slideIndex-1].className += " active";
  }
  
    // }
}
