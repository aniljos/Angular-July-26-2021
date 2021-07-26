import { Component } from "@angular/core";

@Component({
    selector: "databinding",
    templateUrl: './databinding.component.html'
})
export class DataBindingComponent{

    public name: string;
    public count: number;
    public message: string;

    constructor(){
        this.name = "Anil Joseph";
        this.count = 5;
        this.message = "Hello World!";
    }

    inc(){
        this.count++;
    }

}