import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  private authService = inject(AuthService);

  ngOnInit(): void {
    console.log('\n\n >> this.authService.isAuth$.value: ', this.authService.isAuth$.value);

    // const arr = [20, 1, 10, 2, 2, 3, 5, 1, 2];

    // const arr1 = [ ...new Set(arr) ];
    // console.log('\n arr1: ', arr1);

    // const arr2 = arr1.sort((a, b) => Number(a) > Number(b) ? 1 : -1);
    // console.log('\n arr2: ', arr2);

    // const arr3 = arr2.reduce((total, obj) => total + obj, 0);
    // console.log('\n arr3: ', arr3);

    // const arr4 = arr2.map(item => 'a' + item);
    // console.log('\n arr4: ', arr4);

    // const arr5 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    // arr5.forEach((element, index) => arr5[index] = element + 100);
    // console.log('\n arr5: ', arr5);

    // const arr6 = arr5.filter(elem => elem > 105)
    // console.log('\n arr6: ', arr6);
  }
}
