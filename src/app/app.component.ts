import { Component,ElementRef, ViewChild } from '@angular/core';

import { RouterOutlet, Scroll } from '@angular/router';
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

  
  constructor(private el: ElementRef) {}

  scrollToTop() {
    this.el.nativeElement.ownerDocument.defaultView.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

}
