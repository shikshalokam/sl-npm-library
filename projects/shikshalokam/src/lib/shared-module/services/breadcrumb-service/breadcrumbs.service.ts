import { Injectable } from '@angular/core';
import {IBreadcrumb} from "../../components/breadcrumb/breadcrumbs.model";
import {Observable, Observer, Subject} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class BreadcrumbsService {

    private breadcrumbs:IBreadcrumb[];
    private prefixedBreadcrumbs:IBreadcrumb[] = [];
    public breadcrumbsSource:Subject<IBreadcrumb[]>;
    public breadcrumbsChanged$:Observable<IBreadcrumb[]>;

    constructor() {
        this.breadcrumbs = [];
        this.breadcrumbsSource = new Subject<IBreadcrumb[]>();
        this.breadcrumbsChanged$ = this.breadcrumbsSource.asObservable();

        if(localStorage.getItem('prefixedBreadcrumbs') != null) {
            this.prefixedBreadcrumbs = (JSON.parse(localStorage.getItem('prefixedBreadcrumbs')))
        }
    }

    public store(breadcrumbs:IBreadcrumb[]) {
        this.breadcrumbs = breadcrumbs;

        let allBreadcrumbs = this.prefixedBreadcrumbs.concat(this.breadcrumbs);
        this.breadcrumbsSource.next(allBreadcrumbs);

    }


    public storePrefixed(breadcrumb:IBreadcrumb) {
        this.storeIfUnique(breadcrumb);
        localStorage.setItem('prefixedBreadcrumbs', JSON.stringify(this.prefixedBreadcrumbs));
        let allBreadcrumbs = this.prefixedBreadcrumbs.concat(this.breadcrumbs);
        this.breadcrumbsSource.next(allBreadcrumbs);

    }


    public get() {
        return this.breadcrumbsChanged$
    }



    private storeIfUnique(newBreadcrumb:IBreadcrumb) {
        let isUnique = true;
        for(let crumb of this.prefixedBreadcrumbs) {
            if (newBreadcrumb.url == crumb.url) {
                isUnique = false;
                break;
            }
        }
        if(isUnique) {
            this.prefixedBreadcrumbs.push(newBreadcrumb);
        }

    }

}