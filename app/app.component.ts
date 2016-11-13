/**
 * Created by jmlegrand on 05/11/16.
 */

import {Component} from "@angular/core";

@Component({
    selector: 'my-app',
    template: `
        <wines-list></wines-list>
        <wine-detail [wine]="selectedWine"></wine-detail>  
    `
})


export class AppComponent { }