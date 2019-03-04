import { OnInit, EventEmitter } from '@angular/core';
export declare class NavbarComponent implements OnInit {
    showDropdown: boolean;
    dropdownLabel: any;
    currentUser: any;
    logo: any;
    Logout: EventEmitter<{}>;
    constructor();
    ngOnInit(): void;
    openDropdown(): void;
    onSignout(): void;
}
