export class Dragon{
    id: Number;
    createdAt: String;
    type: String;

    constructor(
        id: Number,
        createdAt: String,
        type: String
    ){
        this.id = id;
        this.createdAt = createdAt;
        this.type = type;
    }
}