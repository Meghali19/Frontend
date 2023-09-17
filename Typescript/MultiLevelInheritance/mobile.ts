import { Electronics } from "./electronics";
export class Mobile extends Electronics{
    price:number;
    override display(): void {
        console.log("Inside Mobile");
    }
}