/**
 * Created by jmlegrand on 12/11/16.
 */

import {Injectable} from "@angular/core";
import {Injectable} from "@angular/core";
import {WINES} from "./mock-wines";

@Injectable()
export class WineService {
    getWines = () => {
        return WINES;
    }
}