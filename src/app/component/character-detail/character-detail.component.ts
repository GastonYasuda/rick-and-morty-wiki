import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ApiServiceService } from '../../services/api-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-character-detail',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './character-detail.component.html',
  styleUrl: './character-detail.component.css'
})
export class CharacterDetailComponent implements OnInit{

  private _router = inject (ActivatedRoute)
  private _apiService = inject (ApiServiceService)
  

  characterDetail?:any;
  loading?:boolean=false;

  ngOnInit(): void {
    this._router.params.subscribe((params)=>{     
      
      this._apiService.getCharacterById(params['characterId']).subscribe((data)=>{
        this.characterDetail = data;
        this.loading = true;

      })
    })
  }
}
