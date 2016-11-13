/**
 * Created by jmlegrand on 12/11/16.
 */

import {Component, OnInit} from "@angular/core";
import {Wine} from "./wine";
import {WineService} from "./wine.service";


@Component({
    selector: "wines-list",
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
        `
})

export class WinesComponent implements OnInit {
    title: string = "List of wines";
    wines : Wine[];
    selectedWine: Wine;

    constructor(private wineService: WineService) { }

    ngOnInit(): void {
        this.getWinesSlowly();
    }

    getWines = () => {
        this.wineService.getWines().then(
            (wines) => {
                this.wines = wines;
            }
        )
    };

    getWinesSlowly(): Promise<void> {
        return new Promise<void> (resolve =>
            setTimeout(resolve, 2000))
            .then(() => this.getWines());
    };

    onSelect = (wine: Wine) => {
        this.selectedWine = wine;
    };

}
