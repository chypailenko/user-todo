import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {User} from './User';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { environment as env } from '../../../environments/environment';

let users = [
  {name: 'User1', surname: 'User-1', mail: 'some1@e-mail.com', age: '20', id: 1},
  {name: 'User2', surname: 'User-2', mail: 'some2@e-mail.com', age: '22', id: 2},
  {name: 'User3', surname: 'User-3', mail: 'some3@e-mail.com', age: '18', id: 3},
  {name: 'User4', surname: 'User-4', mail: 'some4@e-mail.com', age: '19', id: 4},
];

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private subject = new Subject();
  private headers: HttpHeaders = new HttpHeaders().set('Content-Type', 'application/json' );

  constructor(private http: HttpClient) { }

 /* get(): Observable<User[]> {
    return this.http.get<User[]>(env.apiUrl);
  }*/

  get() {
    return new Promise(resolve => resolve(users));
  }

  add(user: User) {
    return new Promise(resolve => {
      user.id = Date.now();
      users = [...users, user];
      this.subject.next(users);
      resolve(user);
    });
  }

  update(user: User): Promise<User> {
    return new Promise(() => {
      users = users.map(oldUser => oldUser.id === user.id ? user : oldUser);
      this.subject.next(users);
    });
  }

  delete(id: number) {
    return new Promise(() => {
     users = users.filter(user => user.id !== id);
     this.subject.next(users);
    });
  }
 /* add(user: User): Observable<User> {
    return this.http.post<User>(env.apiUrl, user, {
     headers: this.headers
    });
  }

  update(user: User): Observable<User> {
    return this.http.put<User>(env.apiUrl, user, {
      headers: this.headers
    });
  }*/
 /* delete(id: number): Observable<User> {
    return this.http.delete<User>(`${env.apiUrl}/${id}`);
  }*/

  getObservable(): Observable<any> {
    return this.subject.asObservable();
  }

}
