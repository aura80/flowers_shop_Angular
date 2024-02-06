import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtService } from 'src/app/Service/jwt.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  session: any;

  message: string | undefined;
  logoutForm: FormGroup | any;
  authService: any;

  constructor(private service: JwtService,
    private router: Router
  ) { }

  ngOnInit() {
    this.mess();
  }

  mess() {
    this.service.mess().subscribe(
      (response) => {
        console.log(response);
        this.message = response.message;
      }
    )
  }

  onSignOut() {
    this.service.signOut();
  }

}
