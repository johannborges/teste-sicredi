export class Dragon{
    id: number;
    createdAt: string;
    type: string;

    constructor(
        id: number,
        createdAt: string,
        type: string
    ){
        this.id = id;
        this.createdAt = createdAt;
        this.type = type;
    }
}