import { Injectable } from "@angular/core";
import { Book } from "./book";
import { Observable } from "rxjs";
import "rxjs/add/observable/of";
import "rxjs/add/operator/map";

@Injectable({
  providedIn: "root"
})
export class BookService {
  //Book Type
  books: Book[] = [
    {
      id: 1,
      name: "Angular 5",
      price: 100,
      description: " Angular 9 is Best Book"
    },
    {
      id: 2,
      name: "Javascript",
      price: 200,
      description: " Javascript Best Book"
    },
    {
      id: 3,
      name: "Boot strap 4",
      price: 300,
      description: " Bootstrap latest version 4"
    },
    {
      id: 4,
      name: "Type Script",
      price: 400,
      description: " Type Script is super set of Javascript"
    },
    {
      id: 5,
      name: "React",
      price: 500,
      description: " Reactjs these days is tending"
    }
  ];
  constructor() {}

  Books(): Observable<Book[]> {
    // kisi bhi  object array ko observable type ko banane ke liy (Observable.of)
    // kisi variable ko array bana deta he
    return Observable.of(this.books);
  }

  // single type <book>
  Book(id: number): Observable<Book> {
    //map frother opration kerna hota he
    //find search first value single
    //filter all return
    return this.multiBooks().map(sinVar =>
      sinVar.find(findVar => findVar.id == id)
    );
  }
}
