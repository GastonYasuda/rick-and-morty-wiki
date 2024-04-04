import { Component,ElementRef, inject } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './container/nav-bar/nav-bar.component';
import { FooterComponent } from './component/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [RouterOutlet, NavBarComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rick-and-morty-wiki';

  private _eleRef = inject (ElementRef)

  scrollToTop() {
    this._eleRef.nativeElement.ownerDocument.defaultView.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

}
