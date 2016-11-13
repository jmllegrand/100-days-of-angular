/**
 * Created by jmlegrand on 05/11/16.
 */

import {Component} from "@angular/core";

@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <nav>
            <a routerLink="/dashboard">Dashboard</a>
            <a routerLink="/wines">Wines</a>
            <router-outlet></router-outlet>
        </nav>

        <!--wines-list></wines-list-->
        <!--wine-detail [wine]="selectedWine"></wine-detail-->  
    `
})


export class AppComponent {
    title: string = 'Welcome to the winery !'
}