export class AlertModel {
    
    public name: string;
    public time: Date;
    public total: number;
    public ref: string;
    public type: string;

    constructor(name: string, date: Date, total: number, ref: string, type: string) {
        this.name = name;
        this.time = date;
        this.total = total;
        this.ref = ref;
        this.type = type;
    }
}