import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

// components
import {UsersComponent} from './users.component';
import {SharedModulesModule} from '../../SharedModules/shared-modules.module';

@NgModule({
  declarations: [
    UsersComponent

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
