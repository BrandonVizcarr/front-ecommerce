import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { WebResponseModel } from "../../../core/web-reponse-model";
import { environment } from "../../../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class CategoriesServcice{

    private apiRoot:String;

    constructor(private http:HttpClient){
        this.apiRoot=environment.apiUrl;
    }

    public getCategories():Observable<WebResponseModel>{
        return this.http.get<WebResponseModel>(`${this.apiRoot}/categories`);
    }
    

}