import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ContactCardItemModel } from "../contact/contact-body/contact-item.model";
import { InfoCardItemModel } from "./infocard-item.model";

@Injectable(
    {providedIn: 'root'}
)


export class ProductService {
    private BaseUrl: string = "https://pandora-app-6ecf2-default-rtdb.firebaseio.com/"
    private productsEndPoint = "products"
    private locationsEndPoint = "locations"

    constructor(private http:HttpClient){}
    
    getProducts(){
        return this.http.get<InfoCardItemModel []>(this.BaseUrl + this.productsEndPoint + ".json")
    }

    getOneProduct(index:number){
        return this.http.get<InfoCardItemModel>(this.BaseUrl + this.productsEndPoint + "/" + index + ".json")
    }

    getLocations() {
        return this.http.get<ContactCardItemModel []>(this.BaseUrl + this.locationsEndPoint + ".json")
    }

    getOneLocation(index:number){
        return this.http.get<ContactCardItemModel>(this.BaseUrl + this.locationsEndPoint + "/" + index + ".json")
    }

   
}