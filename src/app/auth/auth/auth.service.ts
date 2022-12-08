import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { environment } from "src/environments/environment";
import { AuthResponse } from "./authResponse";


@Injectable({
    providedIn: 'root'
})

export class AuthService {

    baseUrl:string = "https://identitytoolkit.googleapis.com/v1/accounts";
    signInEndpoint:string = "signInWithPassword";
    signUpEndpoint:string = "signUp"

    public constructor(private http:HttpClient) {

    }

    public signup(email:string, password: string) {
        return createUserWithEmailAndPassword(getAuth(), email, password);
    //     const requestBody = {
    //         "email":email,
    //         "password":password,
    //         "returnSecureToken": true
    //     };

    //     return this.http.post<AuthResponse>(`${this.baseUrl}:${this.signUpEndpoint}?key=${environment.firebase.apiKey}`, requestBody);
    }


    public login(email:string, password:string){
        return signInWithEmailAndPassword(getAuth(), email, password);
        // const requestBody = {
        //     "email":email,
        //     "password":password,
        //     "returnSecureToken": true
        // };

        // return this.http.post<AuthResponse>(`${this.baseUrl}:${this.signInEndpoint}?key=${environment.firebase.apiKey}`,requestBody)
    }
}