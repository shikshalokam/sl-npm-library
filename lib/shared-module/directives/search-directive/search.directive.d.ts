import { EventEmitter, OnInit } from '@angular/core';
export declare class SearchDirective implements OnInit {
    searchValue: string;
    sendSearchValue: EventEmitter<{}>;
    constructor();
    ngOnInit(): void;
    search(): void;
}
