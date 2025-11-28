import { HttpClient, HttpParams } from "@angular/common/http";
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

    public getProducts(params?: {
        q?: string;
        minPrice?: number;
        maxPrice?: number;
        categoryId?: number;
        subCategoryId?: number;
        canceled?: boolean;
        page?: number;
        size?: number;
        sortBy?: string;
        direction?: string;
    }): Observable<WebResponseModel<PageableModel<ProductModel>>> {

        let httpParams = new HttpParams();

        if (params) {
            Object.entries(params).forEach(([key, value]) => {
                if (value !== null && value !== undefined && value !== '') {
                    httpParams = httpParams.set(key, value as any);
                }
            });
        }

        return this.http.get<WebResponseModel<PageableModel<ProductModel>>>(
            `${this.apiRoot}/products`,
            { params: httpParams }
        );
    }

    public getProductsById(id:string):Observable<WebResponseModel<ProductModel>>{
        return this.http.get<WebResponseModel<ProductModel>>(`${this.apiRoot}/products/${id}`);
    }

}