import { Component, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, OnDestroy } from '@angular/core';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    mobileQuery: MediaQueryList

    // constructor() { }

    ngOnInit(): void {

    }

    private _mobileQueryListener: () => void;

    fillerNav = Array.from({ length: 6 }, (_, i) => `Nav Item ${i + 1}`);

    fillerContent = Array.from(
        { length: 6 },
    );

    constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
    }

    ngOnDestroy(): void {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }
    logOut() {
        localStorage.removeItem('token')
    }

    titleSearch(event: any) {

    }
}
