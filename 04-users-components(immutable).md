### Step 04.01

#### rewrite services to get immutable model
src/app/main-users/main-users.service.ts
```ts
...
import { Observable, Subject } from 'rxjs';
...
  private subject = new Subject();
...
  add(user) {
    return new Promise(resolve => {
      user.id = Date.now();
      users = [...users, user];
      this.subject.next(users);
      resolve(user);
    });
  }
  
  delete(id) {
    return new Promise(() => {
      users = users.filter(user => user.id !== id);
      this.subject.next(users);
    });
  }
  
  getObservable(): Observable<any> {
    return this.subject.asObservable();
  }
```

### Step 04.02

#### rewrite component
src/app/main-users/users/users.component.ts
```ts
...
  private subscription: Subscription;
...
  ngOnInit() {
    this.getUsers();
    this.subscription = this.usersService.getObservable().subscribe(users => {
      this.users = users;
    });
  }
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
...
```
