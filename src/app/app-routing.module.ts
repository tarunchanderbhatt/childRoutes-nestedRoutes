import { BiodataComponent } from "./biodata/biodata.component";
import { BookdetailsComponent } from "./book/bookdetails/bookdetails.component";
import { ReportComponent } from "./report/report.component";
import { MotherContactsComponent } from "./mother-contacts/mother-contacts.component";
import { FathercontactComponent } from "./fathercontact/fathercontact.component";
import { LoginComponent } from "./login/login.component";
import { StudentsComponent } from "./students/students.component";
import { ServicesComponent } from "./services/services.component";
import { HomeComponent } from "./home/home.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { StudentContactComponent } from "./student-contact/student-contact.component";
import { StudentClassComponent } from "./student-class/student-class.component";
import { StudentSchoolComponent } from "./student-school/student-school.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { BookComponent } from "./book/book.component";

const routes: Routes = [
  { path: "", redirectTo: "Login", pathMatch: "full" },
  { path: "Home", component: HomeComponent },
  { path: "About", component: AboutComponent },
  { path: "Services", component: ServicesComponent },
  {
    path: "Student",
    children: [
      { path: "", component: StudentsComponent, pathMatch: "full" },
      {
        path: "studentContact",

        children: [
          { path: "", component: StudentContactComponent, pathMatch: "full" },
          { path: "FatherContacts", component: FathercontactComponent },
          { path: "MotherContacts", component: MotherContactsComponent }
        ]
      },
      { path: "studentClass", component: StudentClassComponent },
      { path: "studentSchool", component: StudentSchoolComponent }
    ]
  },
  { path: "Contect", component: ServicesComponent },
  { path: "Reports", component: ReportComponent },
  { path: "Login", component: LoginComponent },
  { path: "book", component: BookComponent },
  //Paremaer /:
  { path: "bookdetails/:id", component: BookdetailsComponent },
  {
    path: "bookdetails/:id/:name/:price",
    component: BookdetailsComponent
  },
  { path: "biodata", component: BiodataComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
