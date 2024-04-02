import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ApiServiceService } from '../../services/api-service.service';
import { ICharacter, Result } from '../../../model/character.model';

@Component({
  selector: 'app-search-result',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './search-result.component.html',
  styleUrl: './search-result.component.css'
})
export class SearchResultComponent implements OnInit{

  private _router = inject (ActivatedRoute)
  private _apiService = inject (ApiServiceService)

  searchResult?:any[];
  searchResultByNumber?:Result;
  byNumberOrString:boolean=false;

  searchInputValue?: string | number;


  ngOnInit(): void {
    
    this._router.params.subscribe(params=>{
           
      this.searchInputValue = isNaN(params['searchResultValue'])? 
      params['searchResultValue']: parseFloat(params['searchResultValue']);

      if (typeof this.searchInputValue === 'string') {
        this.searchResultByNumber = undefined;
        this.byNumberOrString = false;

        this._apiService.getCharacterByName(`${params['searchResultValue']}`).subscribe((data:any)=>{
          console.log(data.results);
          this.searchResult = data.results
        })
      
      } else if (typeof this.searchInputValue === 'number') {
          this.searchResult = [];
          this.byNumberOrString = true;

          this._apiService.getCharacterById(params['searchResultValue']).subscribe((data:any)=>{
              console.log(data);
              this.searchResultByNumber = data
          })
      }
    })
  }
}
