import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ApiServiceService } from '../../services/api-service.service';
import { Result } from '../../../model/character.model';
import { AllLocationOriginsComponent } from '../../component/all-location-origins/all-location-origins.component';

@Component({
  selector: 'app-location',
  standalone: true,
  imports: [RouterLink, AllLocationOriginsComponent],
  templateUrl: './location.component.html',
  styleUrl: './location.component.css'
})
export class LocationComponent implements OnInit{

  private _route = inject (ActivatedRoute)
  private _apiService = inject (ApiServiceService)
  selectedLocation?:Result;
  allResidents?:any[]=[];

  ngOnInit(): void {
    this._route.params.subscribe((params)=>{
  
      this._apiService.getCharacterByLocationById(params['locationId']).subscribe((paramData:any)=>{
        this.allResidents=[]

        this.selectedLocation = paramData
        for(let eachResident of paramData.residents){       

          this._apiService.getCharacterByLink(eachResident).subscribe((residentsData:Result[])=>{
            this.allResidents?.push(residentsData)                
          })        
        }
    }) 
  })      
  }
}
