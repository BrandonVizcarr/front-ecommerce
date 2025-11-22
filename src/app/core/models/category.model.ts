
export interface CategoryModel{
    categoryId?:number;
    name?:string;
    order?:number;
    canceled?:boolean;
    parentId?:number;
    desUrl?:string;
    icon?:string;
    subCategories?: CategoryModel[];
}