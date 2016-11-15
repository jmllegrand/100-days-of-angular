/**
 * Created by jmlegrand on 05/11/16.
 */


import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {FormsModule} from "@angular/forms";
import {WineDetailComponent} from "./wine-detail.component";
import {WineService} from "./wine.service";
import {WinesComponent} from "./wines.component";
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "./dashboard.component";

const routes: Routes = [
    {
        path: "wines",
        component: WinesComponent
    },
    {
        path: "dashboard",
        component: DashboardComponent
    },
    {
        path: "",
        redirectTo:"/dashboard",
        pathMatch: "full"
    },
    {
        path: "detail/:id",
        component: WineDetailComponent
    },

];


@NgModule({
    imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
    declarations: [AppComponent, WineDetailComponent, WinesComponent, DashboardComponent],
    providers: [WineService],
    bootstrap: [AppComponent],
})

export class AppModule {


}