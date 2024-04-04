import { Component, ElementRef, ViewChild } from '@angular/core';
import { CharactersComponent } from '../../container/characters/characters.component';
import { AllLocationOriginsComponent } from '../all-location-origins/all-location-origins.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CharactersComponent,AllLocationOriginsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
