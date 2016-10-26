import {Injectable} from "@angular/core";
import {Point} from './point.class';
import {POINTS} from './points.mock';

@Injectable()
export class PointService {
    getPoints():Promise<Point[]> {
        return Promise.resolve(POINTS);
    }
}