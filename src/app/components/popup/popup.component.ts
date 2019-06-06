import {Component, Inject, Input, OnInit, Output, ViewChild} from '@angular/core';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {UsersService} from '../users/users.service';
import {ActionConfig} from './popup.interface';
import {modalAction} from './popup.constants';
import {User} from '../users/User';


@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {
  public users: any;
 // private newUser = {};
  private newUser: User = new User();
  modalAttributes: ActionConfig;
  @Input() modalRef;
  // @ts-ignore
  @ViewChild('myModal')
  myModal;

  constructor(@Inject(modalAction) private config: ActionConfig,
              private modalService: NgbModal,
              private usersService: UsersService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.usersService.get().then(users => {
      this.users = users;
      console.log(users);
    });
   /* this.usersService.get().subscribe(users => {
      this.users = users;
      console.log(users);
    });*/
  }

  onSubmit() {
    this.usersService.add(this.newUser).then(() => {
      // this.newUser = {};
      /*this.newUser = new User();
      return this.getUsers();*/
      this.modalRef.close();
    });
  }
/* onSubmit(newUser: User): void {
   this.usersService.add(newUser).subscribe();
   this.newUser = new User();
 }*/

  openModal(value) {
    console.log(value);
    this.newUser = new User();
    // this.onSubmit = this.onSubmit;
    this.modalRef = this.modalService.open(this.myModal, {backdrop: 'static'});
    this.modalAttributes =  {...this.config};
  }
  updateUser(): void {
    this.usersService.update(this.newUser);
    this.modalRef.close();
  }
/*  updateUser(user: User): void {
    this.usersService.update(user).subscribe();
    this.modalRef.close();
  }*/
  openModalUpdate(user: User): void {
    // this.newUser = user;
    this.newUser = {...user};
    this.onSubmit = this.updateUser;
    this.modalAttributes = {
      title: 'Update User',
      btnCaption: 'Update',
      btnClass: 'btn-warning'
    };
    this.modalRef = this.modalService.open(this.myModal, {backdrop: 'static'});
  }
}
