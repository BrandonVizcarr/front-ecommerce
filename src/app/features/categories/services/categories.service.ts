import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { WebResponseModel } from "../../../core/web-reponse-model";

@Injectable({
    providedIn: 'root'
})
export class CategoriesServcice{

    private apiRoot:String;

    constructor(private http:HttpClient){
        this.apiRoot="coming soon";
    }

    public getCategories():Observable<WebResponseModel>{
        return this.http.get<WebResponseModel>(`${this.apiRoot}/categories`);
    }
    

}