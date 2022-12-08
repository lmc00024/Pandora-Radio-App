import { Injectable } from "@angular/core";
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { InfoCardItemModel } from "../infocard-item.model";

@Injectable(
    {providedIn: 'root'}
)


export class ItemService {
    private BaseUrl: string = "https://pandora-app-6ecf2-default-rtdb.firebaseio.com/"
    private itemsEndPoint = "items";
    

    constructor(private db:AngularFireDatabase){}
    
    getProducts(){
        return this.db.list<InfoCardItemModel>("items").valueChanges();
    }

    addItem(item:InfoCardItemModel) {
        this.db.list<InfoCardItemModel>("items").push(item);
    }
}