import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ScreenloadingComponent } from './components/screenloading/screenloading.component';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ScreenloadingComponent, HeaderComponent, HomeComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'paybank-app';

  constructor() { }
  ngOnInit(): void {

    gsap.registerPlugin(ScrollTrigger);
    document.addEventListener("DOMContentLoaded", () => {

      var tl1 = gsap.timeline();

      tl1
        .to('.screen-loading', {
          duration: 2,
          opacity: 0,
          delay: 5,
          ease: "power4.out",
        })
        .from(".hero div", {
          duration: 3,
          opacity: 0,
          y: 200,
          stagger: { each: 0.1 },
          ease: "power4.out",
        }, '-=1.5')


      gsap.from(".card-1-scrub", {
        x: -30,
        rotate: '10deg',
        ease: "power1.out",
        scrollTrigger: {
          trigger: '.card-1-scrub',
          start: 'center 70%',
          end: 'center 35%',
          scrub: 2,
        }
      });

      gsap.from(".card-2-scrub", {
        x: 30,
        rotate: '-10deg',
        ease: "power1.out",
        scrollTrigger: {
          trigger: '.card-1-scrub',
          start: 'center 70%',
          end: 'center 35%',
          scrub: 2,
        }
      });

      // LOADING AO SCROLL NAS SEÇÕES
      gsap.from("#section-1 > div", {
        y: 200,
        opacity: 0,
        ease: "power4.out",
        stagger: { each: 0.2 },
        duration: 3,
        scrollTrigger: {
          trigger: '#section-1',
          start: 'top 80%',
          end: 'top 50%',
        }
      });


      gsap.from("#section-2 > div", {
        y: 200,
        opacity: 0,
        ease: "power4.out",
        stagger: { each: 0.1 },
        duration: 3,
        scrollTrigger: {
          trigger: '#section-2',
          start: 'top 80%',
          end: 'top 50%',
        }
      });

      gsap.from("#section-3 > div", {
        y: 200,
        opacity: 0,
        ease: "power4.out",
        stagger: { each: 0.1 },
        duration: 3,
        scrollTrigger: {
          trigger: '#section-3',
          start: 'top 80%',
          end: 'top 50%',
        }
      });

      gsap.from("#section-4 > div", {
        y: 200,
        opacity: 0,
        ease: "power4.out",
        stagger: { each: 0.1 },
        duration: 3,
        scrollTrigger: {
          trigger: '#section-4',
          start: 'top 80%',
          end: 'top 50%',
        }
      });

      gsap.from("#section-5 > div", {
        y: 200,
        opacity: 0,
        ease: "power4.out",
        stagger: { each: 0.1 },
        duration: 3,
        scrollTrigger: {
          trigger: '#section-5',
          start: 'top 80%',
          end: 'top 50%',
        }
      });

      gsap.from("#section-6 > div", {
        y: 200,
        opacity: 0,
        ease: "power4.out",
        stagger: { each: 0.1 },
        duration: 3,
        scrollTrigger: {
          trigger: '#section-6',
          start: 'top 80%',
          end: 'top 50%',
        }
      });

      gsap.from("#section-7 > div", {
        y: 200,
        opacity: 0,
        ease: "power4.out",
        stagger: { each: 0.1 },
        duration: 3,
        scrollTrigger: {
          trigger: '#section-7',
          start: 'top 80%',
          end: 'top 50%',
        }
      });

      gsap.from("#section-8 > div", {
        y: 200,
        opacity: 0,
        ease: "power4.out",
        stagger: { each: 0.1 },
        duration: 3,
        scrollTrigger: {
          trigger: '#section-8',
          start: 'top 80%',
          end: 'top 50%',
        }
      });

    });

    ScrollTrigger.addEventListener("scrollStart", () => {
      ScrollTrigger.refresh();
    });

  }
}
