import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  closeNavbar() {
  const navbar = document.getElementById('navbarTogglerDemo02');
  if (navbar?.classList.contains('show')) {
    navbar.classList.remove('show');
  }
}


}
