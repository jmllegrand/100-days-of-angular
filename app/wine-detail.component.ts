/**
 * Created by jmlegrand on 11/11/16.
 */

import {Component, Input} from "@angular/core";
import {Wine} from "./wine";


@Component({
    selector: "wine-detail",
    template: `
            <div *ngIf="wine">
            <h2> Details for {{wine.name}} :</h2>
            <div> <label>id: </label> {{wine.id}} </div>
            <div> 
                <label>name: </label> 
                <input [(ngModel)]="wine.name" placeholder="name">
            </div>
        </div>
        `
})

export class WineDetailComponent {
    @Input() wine: Wine;
}
