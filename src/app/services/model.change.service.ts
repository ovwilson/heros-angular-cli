import 'rxjs/add/observable/of';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/distinctUntilChanged';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()

export class ModelChanges {

    private fieldValues: Array<any> = [];
    private vals: any = {};
    private changedVals = new BehaviorSubject<any>({});

    getChanges(): Observable<any> {
        return this.changedVals.asObservable();
    }

    change(values: any) {
        const orig = this.vals;
        for (let key in this.fieldValues) {
            // tslint:disable-next-line:no-unused-expression
            const name = this.fieldValues[key];
            //console.info(name, orig[name], values[name]);
            values[name] !== orig[name] ? this.setChanges(name, values[name]) : '';
        }
    }

    private setChanges(name: string, val: any) {
        console.info('CURR value', name, this.vals[name]);
        console.log('new value', name, val);
        this.vals[name] = val;
        this.changedVals.next(this.vals);
    }

    setFieldValues(values: any) {
        this.fieldValues = Object.keys(values);
    }



}
