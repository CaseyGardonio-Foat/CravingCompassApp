export class Dish {
    public name: string;
    public description: string;
    public imagePath: string;
    public keyWords: string[];

    constructor(name: string, description: string, imagePath: string, keyWords: string[]){
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
        this.keyWords = keyWords;
    }
}