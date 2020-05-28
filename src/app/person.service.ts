import { Injectable } from '@angular/core';
import { person } from './person';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  private personArr: person[] = [
    new person('JUlie  3', 'Wesley', 66),
    new person('Mark', 'Thomson', 44),
    new person('David', 'S', 50),
  ];

  constructor() {}
  // getpersons(): Observable<person> {
  //   return new Observable((subscriber) => {
  //     this.delay(3000).then(() => {
  //       subscriber.next(this.personArr.indexOf[1]);
  //     });
  //   });
  // }
  getpersons(): person[] {
    this.delay(4000);
    return this.personArr;
  }
  getPerson(): Observable<person[]> {
    return of(PERSON);
  }
  async delay(ms: number) {
    await new Promise((resolve) => setTimeout(() => resolve(), ms));
  }
}
