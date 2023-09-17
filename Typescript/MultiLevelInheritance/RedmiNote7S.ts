import {Mobile} from "./mobile";
class Redmi extends Mobile{
    Ram : number;
     override display(): void {
         console.log("Inside Redmi");
    }
}

let mi = new Redmi();
mi.price = 12000;
mi.Ram = 4;
mi.name = "RedmiNote7S";

console.log(mi);
mi.display();