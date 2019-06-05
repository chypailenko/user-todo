import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

let users = [
  {name: 'User1', surname: 'User-1', mail: 'some1@e-mail.com', age: 20, id: 1},
  {name: 'User2', surname: 'User-2', mail: 'some2@e-mail.com', age: 22, id: 2},
  {name: 'User3', surname: 'User-3', mail: 'some3@e-mail.com', age: 18, id: 3},
  {name: 'User4', surname: 'User-4', mail: 'some4@e-mail.com', age: 19, id: 4},
];

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private subject = new Subject();

  constructor() { }

  get() {
    return new Promise(resolve => resolve(users));
  }

  add(user) {
    return new Promise(resolve => {
      user.id = Date.now();
      // users.push(user);
      users = [...users, user];
      this.subject.next(users);
      resolve(user);
    });
  }
  delete(id: number) {
    return new Promise(() => {
     users = users.filter(user => user.id !== id);
     this.subject.next(users);
    });
  }

  getObservable(): Observable<any> {
    return this.subject.asObservable();
  }

}
