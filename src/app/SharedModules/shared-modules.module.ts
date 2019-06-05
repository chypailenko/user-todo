import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PopupComponent} from '../components/popup/popup.component';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MinNumberValidatorDirective} from '../components/popup/popup.min-number.directive';

@NgModule({
  declarations: [
    PopupComponent,
    MinNumberValidatorDirective
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
