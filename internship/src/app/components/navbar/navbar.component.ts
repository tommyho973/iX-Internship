import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  navToHome() {
    this.router.navigate(['/home']);
  }

  navToFeedback() {
    this.router.navigate(['/feedback']);
  }

  navToComment() {
    this.router.navigate(['/comment']);
  }
  navToContact() {
    this.router.navigate(['/contact']);
  }






}