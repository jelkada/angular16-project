import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, of, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-consumer-info',
  templateUrl: './consumer-info.component.html',
  styleUrls: ['./consumer-info.component.scss']
})
export class CustomerInfoComponent implements OnInit {

  private activatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    console.log('\n\n ', this.activatedRoute.snapshot.params['id']);

    this.activatedRoute.params
      .pipe(
        tap(p => console.log('\n p: ', p)),
        map((p) => p['id']),
        tap(id => console.log('\n id: ', id)),
        switchMap(id => of([1, 2, 3])),
        tap(arr => console.log('\n arr: ', arr)),
      )
      .subscribe();
  }
  
}
