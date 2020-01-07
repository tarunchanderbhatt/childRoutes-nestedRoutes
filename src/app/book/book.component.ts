import { Component, OnInit } from "@angular/core";
import { Book } from "../book";
import { BookService } from "../book.service";

@Component({
  selector: "app-book",
  templateUrl: "./book.component.html",
  styleUrls: ["./book.component.css"]
})
export class BookComponent implements OnInit {
  dataBooks: Book[];

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.useSer();
  }

  useSer() {
    this.bookService.Books().subscribe(mybooks => {
      this.dataBooks = mybooks;
    });
  }
}
