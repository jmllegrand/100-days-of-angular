/**
 * Created by jmlegrand on 12/11/16.
 */

import {Injectable} from "@angular/core";
import {WINES} from "./mock-wines";
import {Wine} from "./wine";

@Injectable()
export class WineService {
    getWines(): Promise<Wine[]> {
        return Promise.resolve(WINES);
    }
}