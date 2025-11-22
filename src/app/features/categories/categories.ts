import { Component, OnInit } from '@angular/core';
import { CategoriesServcice } from './services/categories.service';
import { CategoryModel } from '../../core/models/category.model';

@Component({
  selector: 'app-categories',
  imports: [],
  templateUrl: './categories.html',
  styleUrl: './categories.scss',
})
export class Categories implements OnInit{

  protected categories:CategoryModel[]=[];

  constructor(private categoriesService: CategoriesServcice){
  }

  ngOnInit(): void {
    this.initCategories();
  }

  private initCategories(){
    this.categoriesService.getCategories().subscribe({
      next:(resp)=>{
        this.categories=resp.data;
      }
    })
  }

} 
