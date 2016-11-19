/**
 * Created by jmlegrand on 15/11/16.
 */

import {Routes, RouterModule} from "@angular/router";
import {WinesComponent} from "./wines.component";
import {DashboardComponent} from "./dashboard.component";
import {WineDetailComponent} from "./wine-detail.component";
import {NgModule} from "@angular/core";


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
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}