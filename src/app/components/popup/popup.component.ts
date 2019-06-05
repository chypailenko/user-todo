import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {UsersService} from '../users/users.service';


@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {
  public users: any;
  private newUser = {};
  @Input() modalRef;
  // @ts-ignore
  @ViewChild('myModal')
  myModal;

  constructor(private modalService: NgbModal,
              private usersService: UsersService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.usersService.get().then(users => {
      this.users = users;
      console.log(users);
    });
  }

  addUser() {
    this.usersService.add(this.newUser).then(() => {
      this.newUser = {};
      return this.getUsers();
    });
  }
  openModal(value) {
    console.log(value);
    this.modalRef = this.modalService.open(this.myModal, {backdrop: 'static'});
  }

}
