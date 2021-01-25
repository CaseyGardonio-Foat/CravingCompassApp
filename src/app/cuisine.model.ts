export class Cuisine {
  public name: string;
  public imagePath: string;
  public type: string;
  public memberOf: string[];
  public members: string[];

  constructor(name: string, imagePath: string, type: string, memberOf: string[], members: string[]){
      this.name = name;
      this.imagePath = imagePath;
      this.type = type;
      this.memberOf = memberOf;
      this.members = members;
  }
}