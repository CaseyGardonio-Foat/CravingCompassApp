export class Dish {
    public name: string;
    public description: string;
    public imagePath: string;
    public keyWords: string[];
    public bgColor?: string;

    constructor(name: string, description: string, imagePath: string, keyWords: string[], bgColor?: string){
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
        this.keyWords = keyWords;
        this.bgColor = bgColor;
    }
}