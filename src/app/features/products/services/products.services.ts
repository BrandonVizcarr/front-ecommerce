import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../../environments/environment";
import { Observable } from "rxjs";
import { WebResponseModel } from "../../../core/web-reponse-model";
import { PageableModel } from "../../../core/models/pageable.model";
import { ProductModel } from "../../../core/models/product.model";

@Injectable({
    providedIn:'root'
})
export class ProductService {

    private apiRoot:string;

    constructor(private http:HttpClient){
        this.apiRoot=environment.apiUrl;
    }

    public getProducts():Observable<WebResponseModel<PageableModel<ProductModel>>>{
        return this.http.get<WebResponseModel<PageableModel<ProductModel>>>(`${this.apiRoot}/products`);
    }


}