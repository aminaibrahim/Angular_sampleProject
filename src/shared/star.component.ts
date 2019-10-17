
import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';



@Component({
    selector:"star-component",
    templateUrl:"./star.component.html",
    styleUrls:['./star.component.css']
})


export class starComponent implements OnChanges{
@Input() rating:number;
starWidth:number;


@Output() ratingClicked:EventEmitter <string> = new EventEmitter();

onClick():void{
    
    this.ratingClicked.emit(`${this.rating} is clicked`);
}

ngOnChanges():void{


    this.starWidth = this.rating * 75 / 5;
    
}
}