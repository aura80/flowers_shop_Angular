import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JwtService } from 'src/app/Service/jwt.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {

  constructor(private service: JwtService,
    private router: Router
  ) { }

  onSignOut() {
    this.service.signOut();
  }

}
