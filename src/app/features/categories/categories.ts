import { Component, OnInit } from '@angular/core';
import { CategoriesServcice } from './services/categories.service';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MenuItem } from 'primeng/api';
import { MenuMapperUtil } from '../../utils/menu-mapper.util';
@Component({
  selector: 'app-categories',
  imports: [PanelMenuModule],
  templateUrl: './categories.html',
  styleUrl: './categories.scss',
})
export class Categories implements OnInit{
  public items:MenuItem[]=[];
  constructor(private categoriesService: CategoriesServcice,private menuMapper:MenuMapperUtil){
  }

  ngOnInit(): void {
    this.initCategories();
  }

  private initCategories(){
    this.categoriesService.getCategories().subscribe({
      next:(resp)=>{
        console.log(resp.data)
          this.items=this.menuMapper.mapToPanelMenuItems(resp.data);
      }
    })
  }

}
