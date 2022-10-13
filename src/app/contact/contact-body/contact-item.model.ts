export class ContactCardItemModel{
    city: string;
    first_line: string;
    second_line: string;
    third_line: string;
    tel: string;

    constructor(city: string, first_line: string,second_line: string, third_line: string, tel:string){
        this.city = city;
        this.first_line = first_line;
        this.second_line = "missing suite/floor";
        this.third_line = "missing city/state/zip";
        this.tel = "";
    }
}