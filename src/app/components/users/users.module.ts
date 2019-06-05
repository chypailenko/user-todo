import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

// components
import {UsersComponent} from './users.component';
import {EditPopupComponent} from '../edit-popup/edit-popup.component';
import {SharedModulesModule} from '../../SharedModules/shared-modules.module';

@NgModule({
  declarations: [
    UsersComponent,
    EditPopupComponent

  ],
  imports: [
   CommonModule,
    FormsModule,
    SharedModulesModule
  ],
  exports: [
    UsersComponent
  ]
})
export class UsersModule { }
