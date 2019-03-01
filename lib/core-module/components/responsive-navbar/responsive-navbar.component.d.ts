import { OnInit, EventEmitter } from '@angular/core';
export declare class ResponsiveNavbarComponent implements OnInit {
    openDrawer: EventEmitter<{}>;
    currentUser: any;
    logo: any;
    Logout: EventEmitter<{}>;
    constructor();
    ngOnInit(): void;
    onSignout(): void;
    openSideNav(): void;
}
