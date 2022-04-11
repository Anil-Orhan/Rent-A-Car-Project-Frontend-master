import { StringMap } from "@angular/compiler/src/compiler_facade_interface";

export interface UserModel{

    userID:number;
    firstName:string;
    lastName:string;
    email:string;
    passwordHash:BinaryData;
    passwordSalt:BinaryData;
    status:boolean;
    identificationNumber:string;

}