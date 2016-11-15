/**
 * Created by jmlegrand on 11/11/16.
 */

import {Component, Input, OnInit} from "@angular/core";
import {Wine} from "./wine";
import {WineService} from "./wine.service";
import {ActivatedRoute, Params} from "@angular/router";
import {Location} from "@angular/common";


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
                <button (click)="goBack()">BACK</button>
            </div>
        `
})

export class WineDetailComponent implements OnInit{

    wine: Wine;

    constructor(
        private wineService: WineService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            console.log('JM - params', params);
            console.log('JM - this.route', this.route.toString());
            let id= +params['id'];
            this.wineService.getWine(id)
                .then((wine) => this.wine = wine)
        })
    }

    goBack(): void  {
        this.location.back();
    }


}
