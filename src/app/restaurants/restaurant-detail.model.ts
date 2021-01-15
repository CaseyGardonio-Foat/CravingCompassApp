export class RestaurantDetail {
    public name: string;
    public address: string;
    public website: string;
    public openingHours: string;

    constructor(name: string, address:string, website:string, openingHours:string){
        this.name = name;
        this.address = address;
        this.website = website;
        this.openingHours = openingHours;
    }
}