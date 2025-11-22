
export interface ProductModel{
    productId?:string;
    name?:string;
    description?:string;
    rate?:number;
    rateCount?:number;
    price?:number;
    discount?:number;
    stock?:number;
    createdAt?:Date;
    updatedAt?:Date;
    media?:string[] | any;
    canceled?:boolean;
    categoryId?:number;
    subCategoryId?:number;
    sellerId?:number;
    brandId?:number;
    seller?:any;
}