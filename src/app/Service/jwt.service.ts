import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

const BASE_URL = ["http://localhost:8085/"]

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor(private http: HttpClient, private router: Router) { }

  register(signinRequest: any): Observable<any> {
    return this.http.post(BASE_URL + 'signup', signinRequest)
  }

  login(loginRequest: any): Observable<any> {
    return this.http.post(BASE_URL + 'login', loginRequest)
  }

  signOut() {
    this.router.navigate(['login']);
    localStorage.removeItem('jwt');
  }

  mess(): Observable<any> {
    return this.http.get(BASE_URL + 'api/mess', {
      headers: this.createAuthHeader()
    })
  }

  private createAuthHeader() {
    const jwtToken = localStorage.getItem('jwt');
    if (jwtToken) {
      console.log("JWT token found in local storage", jwtToken);
      return new HttpHeaders().set(
        "Authorization", "Bearer " + jwtToken
      ) as any
    } else {
      console.log("JWT token not found in local storage");
    }
    return null;
  }
}
