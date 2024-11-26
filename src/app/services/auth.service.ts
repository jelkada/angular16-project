import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  isAuth$: BehaviorSubject<boolean> = new BehaviorSubject(true);
}