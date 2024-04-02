import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AllCharactersComponent } from './component/all-characters/all-characters.component';
import { CharacterDetailComponent } from './component/character-detail/character-detail.component';
import { SearchResultComponent } from './component/search-result/search-result.component';
import { LocationComponent } from './container/location/location.component';
import { AllLocationOriginsComponent } from './component/all-location-origins/all-location-origins.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'allCharacters', component: AllCharactersComponent },
  { path:'characterDetail/:characterId', component:CharacterDetailComponent},
  { path:'searchResult/:searchResultValue', component:SearchResultComponent},
  { path:'locations', component:AllLocationOriginsComponent},
  { path:'location/:locationId', component: LocationComponent},
  { path:'**', component:HomeComponent}
];
