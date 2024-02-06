import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JwtService } from 'src/app/Service/jwt.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private service: JwtService,
    private router: Router
  ) { }

  onSignOut() {
    this.service.signOut();
  }
}
