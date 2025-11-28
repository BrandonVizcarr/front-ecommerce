import { Component, OnInit } from '@angular/core';
import { CategoriesServcice } from './services/categories.service';
import { CategoryModel } from '../../core/models/category.model';
import { CategorySignal } from './services/category-signal';

@Component({
  selector: 'app-categories',
  imports: [],
  templateUrl: './categories.html',
  styleUrl: './categories.scss',
})
export class Categories implements OnInit{

  protected categories:CategoryModel[]=[];
  protected expandedCategoryId?: number | any;

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

  searchCategory(categoryId:any){
    CategorySignal.set(categoryId);
  }
  
  toggle(id?: number) {
    this.expandedCategoryId = this.expandedCategoryId === id ? undefined : id;
  }

} 
