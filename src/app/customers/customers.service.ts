import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { CustomerData } from './customers.model';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  private httpClient = inject(HttpClient);

  getUsers = (): Observable<CustomerData[]> => {
    console.log('CustomersService: getUsers()');
    return this.httpClient.get<CustomerData[]>('https://reqres.in/api/uses');
  }
}
