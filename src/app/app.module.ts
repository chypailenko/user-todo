import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersModule } from './components/users/users.module';
import { SharedModulesModule } from './SharedModules/shared-modules.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ContainerComponent } from './components/container/container.component';
import { modalAction, modalActionConfig } from './components/popup/popup.constants';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent
  ],
  imports: [
    BrowserModule,
    UsersModule,
    NgbModule,
    SharedModulesModule,
    HttpClientModule
  ],
  providers: [{ provide: modalAction, useValue: modalActionConfig }],
  bootstrap: [AppComponent]
})
export class AppModule { }
