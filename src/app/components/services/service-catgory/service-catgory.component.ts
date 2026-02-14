import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-catgory',
  templateUrl: './service-catgory.component.html',
  styleUrls: ['./service-catgory.component.css']
})
export class ServiceCatgoryComponent implements OnInit {
  categories = [
  {
    title: 'Brand Promotion',
    description: 'Increase brand visibility and awareness through strategic on-ground and digital promotional campaigns.',
    icon: 'bi bi-award-fill'
  },
  {
    title: 'LED Advertisement',
    description: 'High-impact LED screen advertising to capture attention in prime urban and high-traffic locations.',
    icon: 'bi bi-display-fill'
  },
  {
    title: 'LED Van Promotion',
    description: 'Mobile LED van campaigns that take your brand message directly to your target audience.',
    icon: 'bi bi-truck-front-fill'
  },
  {
    title: 'Rural Activities',
    description: 'Target rural markets through activations, roadshows, and hyperlocal engagement campaigns.',
    icon: 'bi bi-people-fill'
  }
];


  constructor() { }

  ngOnInit(): void {
  }

}
