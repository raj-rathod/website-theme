import { Component, OnInit } from '@angular/core';
import { whatsappLink } from 'src/app/helper/socialLink';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css']
})
export class HeroSectionComponent implements OnInit {
  whatsappLink = whatsappLink
  constructor() { }

  ngOnInit(): void {
  }

}
