import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

export interface CanComponentDeactivate {
    confirmExit(): boolean;
}

@Injectable()
export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
    canDeactivate (Component: CanComponentDeactivate, next: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | boolean { return Component.confirmExit();}
}