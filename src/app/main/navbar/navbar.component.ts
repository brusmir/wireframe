import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit() {
  }

  logOut() {
    this.router.navigate(['/login']);
  }

  showSlide() {
    let slide = document.getElementById('slide');
    slide.classList.toggle('d-none');
  }

}
