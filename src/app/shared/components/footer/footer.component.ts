import { Component, OnInit } from '@angular/core';
import { provideServices } from 'src/app/helper/provideServices';
import { socialMedia } from 'src/app/helper/socialMedialLink';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  socialMediaData = socialMedia;
  provideServices = provideServices;
  constructor() { }

  ngOnInit(): void {
    console.log(this.socialMediaData)
  }

}
