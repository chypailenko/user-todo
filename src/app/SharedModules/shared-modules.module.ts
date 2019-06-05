import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PopupComponent} from '../components/popup/popup.component';
import {UsersModule} from '../components/users/users.module';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    PopupComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule
  ],
  exports: [
    PopupComponent,
  ]
})
export class SharedModulesModule { }
