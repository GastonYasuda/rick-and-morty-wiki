import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink,NgClass],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent {

  private _route = inject (Router)


  searchForm!:FormGroup
  searchByNameAndId?:any;
  selectedMenu?:String;

constructor(private formBuilder:FormBuilder){
  this.searchForm = this.formBuilder.group({
    search:['', Validators.required]
  })
}

  searchCharacter(event:Event){
    event.preventDefault()
    this.searchByNameAndId = this.searchForm.value.search

    if(this.searchByNameAndId.length !== 0 ){
      this._route.navigate(['/searchResult', this.searchByNameAndId])

    }
  }

  hasErrors(controlName:string,errorType:string){
    return this.searchForm.get(controlName)?.hasError(errorType)&&
    this.searchForm.get(controlName)?.touched
  }

  selectMenu(event:String){
    this.selectedMenu = event
  }

}
