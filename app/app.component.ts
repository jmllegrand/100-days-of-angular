/**
 * Created by jmlegrand on 05/11/16.
 */

import {Component} from "@angular/core";
import {Wine} from "./Wine";

@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <h2>{{wine.name}} details!</h2>
        <div> <label>id: </label> {{wine.id}} </div>
        <div> 
            <label>name: </label> 
            <input [(ngModel)]="wine.name" placeholder="name">
        </div>
    `
})


export class AppComponent {
    wine: Wine = new Wine(1, "Chateau Latour 2015");
    title: string = "List of wines";
}