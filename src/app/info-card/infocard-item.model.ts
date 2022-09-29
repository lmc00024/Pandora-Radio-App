export class InfoCardItemModel{
    img: string;
    header: string;
    body: string;

    constructor(img: string, header: string,body: string){
        this.img = img;
        this.header = header;
        this.body = body;
    }
}