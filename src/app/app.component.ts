import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'model-app';

  constructor(private router: Router) {

  }

  public login(): void {
    this.router.navigateByUrl('/dashboard');
  }
}
