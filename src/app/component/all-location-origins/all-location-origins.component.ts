import { Component, ElementRef, Input, OnInit, inject } from '@angular/core';
import { ApiServiceService } from '../../services/api-service.service';
import { Result } from '../../../model/character.model';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-all-location-origins',
  standalone: true,
  imports: [RouterLink, NgClass],
  templateUrl: './all-location-origins.component.html',
  styleUrl: './all-location-origins.component.css'
})
export class AllLocationOriginsComponent implements OnInit{

  @Input() locationOrigin?:String;

  private _apiService = inject(ApiServiceService)
  private _eleRef = inject (ElementRef)
  allLocations?:Result[]=[];

  ngOnInit(): void {

    this._apiService.getCharacterByLocation().subscribe((data:any)=>{
      this.allLocations = data.results
    })
    
  }
  scrollToTop() {
    this._eleRef.nativeElement.ownerDocument.defaultView.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

}
