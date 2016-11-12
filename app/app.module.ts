/**
 * Created by jmlegrand on 05/11/16.
 */


import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {FormsModule} from "@angular/forms";
import {WineDetailComponent} from "./wine-detail.component";
import {WineService} from "./wine.service";


@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, WineDetailComponent],
    providers: [WineService],
    bootstrap: [AppComponent]
})

export class AppModule { }