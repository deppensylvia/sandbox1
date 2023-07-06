import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeacherComponent } from './input-example/teacher/teacher.component';
import { StudentComponent } from './input-example/student/student.component';
import { HeaderComponent } from './output-example/header/header.component';
import { LoginComponent } from './output-example/login/login.component';
import { FormsModule } from '@angular/forms';
import { EcparentComponent } from './viewchild-example/ecparent/ecparent.component';
import { EcchildComponent } from './viewchild-example/ecchild/ecchild.component';
import { BasiccheckComponent } from './service-example/basiccheck/basiccheck.component';
import { AdvancecheckComponent } from './service-example/advancecheck/advancecheck.component';
import { FinalcheckComponent } from './service-example/finalcheck/finalcheck.component';

@NgModule({
  declarations: [
    AppComponent,
    TeacherComponent,
    StudentComponent,
    HeaderComponent,
    LoginComponent,
    EcparentComponent,
    EcchildComponent,
    BasiccheckComponent,
    AdvancecheckComponent,
    FinalcheckComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
