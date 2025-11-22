export interface SellerModel{
    sellerId?:number;
    name?:string;
    desc?:string;
    countryId?:number;
    cityId?:number;
    rate?:number;
    rateCount?:number;
    createdAt?:Date;
    updatedAt?:Date;
    soldItems?:number;
    verified?:boolean;
    userId?:string;
    profileImg?:string;
}