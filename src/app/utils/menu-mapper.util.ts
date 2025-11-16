import { Injectable } from "@angular/core";
import { MenuItem } from "primeng/api";

@Injectable({
    providedIn:'root'
})
export class MenuMapperUtil {

    public mapToPanelMenuItems(categories: any[]): MenuItem[] {
    if (!categories || categories.length === 0) {
      return [];
    }

    return categories.map(category => {
      const menuItem: MenuItem = {
        label: category.name,
      };

      if (category.subCategories && category.subCategories.length > 0) {
        menuItem.items = this.mapToPanelMenuItems(category.subCategories);
      }
      
      return menuItem;
    });
  }

}