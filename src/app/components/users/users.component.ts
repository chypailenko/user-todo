import { Component, EventEmitter, OnInit, OnDestroy, Output } from '@angular/core';
import {UsersService} from './users.service';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {Subscription} from 'rxjs';
import {User} from './User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit, OnDestroy {
  public users: any;
  private newUser = {};
  private modalRef: NgbModalRef;
  private subscription: Subscription;

  @Output() clickUpdate = new EventEmitter();

  constructor(private usersService: UsersService,
              private modalService: NgbModal) { }

  ngOnInit() {
    this.getUsers();
    this.subscription = this.usersService.getObservable().subscribe(users => {
      this.users = users;
    });
  }

  getUsers() {
    this.usersService.get().then(users => {
      this.users = users;
      console.log(users);
    });
  }

  deleteUser(user) {
    this.usersService.delete(user.id);
    return this.getUsers();
  }

 /* getUsers(): void {
    this.usersService.get()
      .subscribe(users => this.users = users);
  }*/

/*  deleteUser(user: User): void {
    this.usersService.delete(user.id)
      .subscribe();
  }*/

  editUser(event, user) {
    event.stopPropagation();
    this.clickUpdate.emit(user);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
