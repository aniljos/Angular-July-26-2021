import { Component } from "@angular/core";

@Component({
    selector: "temp-converter",
    templateUrl: './temprature-converter.component.html'
})
export class TempratureConverterComponent{

    public input: number;
    public output: number;
    

    constructor(){
        this.input = 0;
        this.output = 0;
        this.convert();
    }

    convert(){
        this.output = this.input * (9/5) + 32;
    }

}