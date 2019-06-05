import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersModule } from './components/users/users.module';
import { SharedModulesModule } from './SharedModules/shared-modules.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {PopupComponent} from './components/popup/popup.component';
import { ContainerComponent } from './components/container/container.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent
  ],
  imports: [
    BrowserModule,
    UsersModule,
    NgbModule,
    SharedModulesModule
  ],
  // exports: [NgbModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
