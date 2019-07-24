export class ProductModel {

    public ref: string;
    public description: string;
    public costValue: number;
    public saleValue: number;
    public quantity: number;
    public expireDate: Date;
    public tags: Array<string>;

    constructor(ref: string, description: string, costValue: number, saleValue: number, quantity: number, expireDate: Date, tags: Array<string>) {
        this.ref = ref;
        this.description = description;
        this.costValue = costValue;
        this.saleValue = saleValue;
        this.quantity = quantity;
        this.expireDate = expireDate;
        this.tags = tags;
    }
}