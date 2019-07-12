import {Component, Input, OnInit, ViewEncapsulation} from "@angular/core";
import {Router, ActivatedRoute, NavigationEnd, Params, PRIMARY_OUTLET} from "@angular/router";
import {filter} from "rxjs/operators";
import {IBreadcrumb} from "./breadcrumbs.model";
import {BreadcrumbsService} from "../../services/breadcrumb-service/breadcrumbs.service";
import { UtilityService } from "../../../core-module/services/utility-service/utility.service";


@Component({
    selector: "breadcrumb",
    templateUrl: './breadcrumbs.component.html',
    styleUrls: ['./breadcrumbs.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class BreadcrumbComponent implements OnInit {
  private ROUTE_DATA_BREADCRUMB: string = "breadcrumb";
  private ROUTE_PARAM_BREADCRUMB: string = "breadcrumb";
  private PREFIX_BREADCRUMB: string = "prefixBreadcrumb";

  private currentBreadcrumbs: IBreadcrumb[];
  public breadcrumbs: IBreadcrumb[];

  @Input()
  public addClass: string;

  @Input() showControl;
  @Input() startIndex;

  public constructor(private breadcrumbService: BreadcrumbsService,private utilityService :UtilityService, private activatedRoute: ActivatedRoute, private router: Router) {
    breadcrumbService.get().subscribe((breadcrumbs: IBreadcrumb[]) => {
      this.breadcrumbs = breadcrumbs as IBreadcrumb[];
    });

  }

  public hasParams(breadcrumb: IBreadcrumb) {
    return Object.keys(breadcrumb.params).length ? [breadcrumb.url, breadcrumb.params] : [breadcrumb.url];
  }

  onBack() {
    this.utilityService.onBack();
}
  public ngOnInit() {
    if(this.router.navigated){
      this.generateBreadcrumbTrail();
    };

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd
    )).subscribe(event => {
      this.generateBreadcrumbTrail();
    });
  }

  private generateBreadcrumbTrail(){
    this.currentBreadcrumbs = [];


    let currentRoute: ActivatedRoute = this.activatedRoute.root;


    let url: string = "";

    while (currentRoute.children.length > 0) {
      let childrenRoutes: ActivatedRoute[] = currentRoute.children;
      let breadCrumbLabel: string = "";

      childrenRoutes.forEach(route => {
        currentRoute = route;
        if (route.outlet !== PRIMARY_OUTLET) {
          return;
        }
        const hasData = (route.routeConfig && route.routeConfig.data);
        const hasDynamicBreadcrumb: boolean = route.snapshot.params.hasOwnProperty(this.ROUTE_PARAM_BREADCRUMB);

        if (hasData || hasDynamicBreadcrumb) {
         
          if (hasDynamicBreadcrumb) {
            breadCrumbLabel = route.snapshot.params[this.ROUTE_PARAM_BREADCRUMB].replace(/_/g, " ");
          } else if (route.snapshot.data.hasOwnProperty(this.ROUTE_DATA_BREADCRUMB)) {
            breadCrumbLabel = route.snapshot.data[this.ROUTE_DATA_BREADCRUMB];
          }
          let routeURL: string = route.snapshot.url.map(segment => segment.path).join("/");
          url += `/${routeURL}`;
          if (routeURL.length === 0) {
            route.snapshot.params = {};
          }
          let breadcrumb: IBreadcrumb = {
            label: breadCrumbLabel,
            params: route.snapshot.params,
            url: url
          };
          if (route.snapshot.data.hasOwnProperty(this.PREFIX_BREADCRUMB)) {
            this.breadcrumbService.storePrefixed(breadcrumb);
          }
          else {
            this.currentBreadcrumbs.push(breadcrumb);
          }
        }
      });
      this.breadcrumbService.store(this.currentBreadcrumbs);
    }
  }
}
