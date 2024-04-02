import { Component, OnInit, inject } from '@angular/core';
import { ApiServiceService } from '../../services/api-service.service';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-all-characters',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './all-characters.component.html',
  styleUrl: './all-characters.component.css',
})
export class AllCharactersComponent implements OnInit {
  private _apiService = inject(ApiServiceService);
private _router = inject(Router);

  allCharacters?: any[]=[];
  loading?:boolean=false;

  ngOnInit(): void {
      this.allCharacters = this._apiService.getAllCharacters();
      if(this.allCharacters){
        this.loading = true;
      }
  }
}
