import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isLoggedIm = localStorage.getItem("token");
  title = 'AugularCRMApp';
  logout(){
    localStorage.removeItem("token")
    localStorage.clear()
  }
}
