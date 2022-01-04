import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Library';

  links = [
    { path: '/home', icon: 'home', title: 'Home' },
    { path: '/books', icon: 'view_list', title: 'Books' },
  ];

  constructor(private router: Router) {}

  // Let's demonstrate dynamic routing
  // using router service
  login() {
    this.router.navigateByUrl('/login');
  }
}
