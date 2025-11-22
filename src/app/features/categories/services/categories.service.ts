import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { WebResponseModel } from "../../../core/web-reponse-model";
import { environment } from "../../../../environments/environment";
import { CategoryModel } from "../../../core/models/category.model";

@Injectable({
    providedIn: 'root'
})
export class CategoriesServcice{

    private apiRoot:string;

    constructor(private http:HttpClient){
        this.apiRoot=environment.apiUrl;
    }

    public getCategories():Observable<WebResponseModel<CategoryModel>>{
        return this.http.get<WebResponseModel<CategoryModel>>(`${this.apiRoot}/categories`);
    }
    

}