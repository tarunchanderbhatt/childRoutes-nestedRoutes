import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { StudentsComponent } from './students/students.component';
import { ContactComponent } from './contact/contact.component';
import { StudentContactComponent } from './student-contact/student-contact.component';
import { StudentClassComponent } from './student-class/student-class.component';
import { StudentSchoolComponent } from './student-school/student-school.component';
import { LoginComponent } from './login/login.component';
import { FathercontactComponent } from './fathercontact/fathercontact.component';
import { MotherContactsComponent } from './mother-contacts/mother-contacts.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BookComponent } from './book/book.component';
import { BookdetailsComponent } from './book/bookdetails/bookdetails.component';
import { ReportComponent } from './report/report.component';
import { BiodataComponent } from './biodata/biodata.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    StudentsComponent,
    ContactComponent,
    StudentContactComponent,
    StudentClassComponent,
    StudentSchoolComponent,
    LoginComponent,
    FathercontactComponent,
    MotherContactsComponent,
    PageNotFoundComponent,
    BookComponent,
    BookdetailsComponent,
    ReportComponent,
    BiodataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
