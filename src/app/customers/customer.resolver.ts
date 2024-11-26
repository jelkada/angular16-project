import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { CustomerData } from './customers.model';
import { delay, of } from 'rxjs';


export const CustomerResolver: ResolveFn<CustomerData[]> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => { 
  // const dataStorageService = inject(DataStorageService);
  
  return of([
    { id: '1', name: 'name1' },
    { id: '2', name: 'name2' },
    { id: '3', name: 'name3' },
  ]).pipe(delay(3000));
}