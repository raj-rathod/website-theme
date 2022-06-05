import { Component, OnInit } from '@angular/core';
import { provideServices } from 'src/app/helper/provideServices';

@Component({
  selector: 'app-image-category',
  templateUrl: './image-category.component.html',
  styleUrls: ['./image-category.component.css']
})
export class ImageCategoryComponent implements OnInit {
  selectedTab = 0;
  provideServices = provideServices;

  constructor() { }

  ngOnInit(): void {
  }

  tabSelection(index: number): void {
    this.selectedTab = index;
  }

}
