/**
 * Created by jmlegrand on 05/11/16.
 */

import {Component} from "@angular/core";
import {Wine} from "./wine";


const WINES : Wine[] = [
    new Wine(0, "Chateau Ausone"),
    new Wine(1, "Chateau Figeac"),
    new Wine(2, "Chateau Canon"),
    new Wine(3, "Chateau Fleur Cardinale"),
    new Wine(4, "Chateau Grand Corbin-Despagne"),
    new Wine(5, "Chateau Petrus"),
    new Wine(6, "Chateau Eglise Clinet"),
    new Wine(7, "Chateau L'Evangile"),
];

@Component({
    selector: 'my-app',
    styles: [ `
      .selected {
        background-color: #CFD8DC !important;
        color: white;
      }
      .wines {
        margin: 0 0 2em 0;
        list-style-type: none;
        padding: 0;
        width: 15em;
      }
      .wines li {
        cursor: pointer;
        position: relative;
        left: 0;
        background-color: #EEE;
        margin: .5em;
        padding: .3em 0;
        height: 1.6em;
        border-radius: 4px;
      }
      .wines li.selected:hover {
        background-color: #BBD8DC !important;
        color: white;
      }
      .wines li:hover {
        color: #607D8B;
        background-color: #DDD;
        left: .1em;
      }
      .wines .text {
        position: relative;
        top: -3px;
      }
      .wines .badge {
        display: inline-block;
        font-size: small;
        color: white;
        padding: 0.8em 0.7em 0 0.7em;
        background-color: #607D8B;
        line-height: 1em;
        position: relative;
        left: -1px;
        top: -4px;
        height: 1.8em;
        margin-right: .8em;
        border-radius: 4px 0 0 4px;
      }
    `
    ],
    template: `
        <h1>{{title}}</h1>
        <ul class="wines">
            <li *ngFor="let wine of wines"  [class.selected]="wine === selectedWine" (click)="onSelect(wine)">
                <span class="badge">{{wine.id}}</span>
                {{wine.name}}
            </li>
        </ul>
        
        <div *ngIf="selectedWine">
            <h2> Details for {{selectedWine.name}} :</h2>
            <div> <label>id: </label> {{selectedWine.id}} </div>
            <div> 
                <label>name: </label> 
                <input [(ngModel)]="selectedWine.name" placeholder="name">
            </div>
        </div>

        
    `
})


export class AppComponent {
    wines : Wine[] =  WINES;
    title: string = "List of wines";
    selectedWine: Wine;

    onSelect = (wine: Wine) => {
        this.selectedWine = wine;
    }
}