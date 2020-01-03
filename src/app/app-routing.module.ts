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
  { path: "Login", component: LoginComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
