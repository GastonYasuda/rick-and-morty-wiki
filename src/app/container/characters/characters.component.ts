import { Component, OnInit, inject } from '@angular/core';
import { ApiServiceService } from '../../services/api-service.service';
import { NgClass, NgFor } from '@angular/common';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [NgFor,RouterLink, NgClass],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css',
})
export class CharactersComponent implements OnInit {
  private _apiService = inject(ApiServiceService);
  private _router = inject(Router);


  characters?: any[] = [];
  totalPages?: number;
  selectedPage?:number;

  ngOnInit(): void {
    this._apiService.getCharacterByPage().subscribe((data: any) => {
      this.characters = data.results;
      this.totalPages = data.info.pages;
    });
  }

  goToPage(id: number) {
    this.selectedPage = id;
    this.characters = []
    this._apiService.getCharacterByPageId(id).subscribe((data) => {
      this.characters = data.results;
    });
  }

  linkToCharacterId(id:number){
    console.log(id);
    this._router.navigate([`/characterDetail/${id}`])

  }
}
