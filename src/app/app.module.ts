import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { StartComponent } from './start/start.component';
import { TestComponent } from './test/test.component';
import { FinishComponent } from './finish/finish.component';
import { ManageTestService } from './manage-test.service';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    StartComponent,
    TestComponent,
    FinishComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    ManageTestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
