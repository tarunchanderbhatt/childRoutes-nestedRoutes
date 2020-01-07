import { Component, OnInit } from "@angular/core";
import { Book } from "src/app/book";
import { BookService } from "src/app/book.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-bookdetails",
  templateUrl: "./bookdetails.component.html",
  styleUrls: ["./bookdetails.component.css"]
})
export class BookdetailsComponent implements OnInit {
  book: Book[];
  constructor(
    private _bookservice: BookService,
    private _activatedroute: ActivatedRoute
  ) {}

  ngOnInit() {
    //router.snapshot.params
    let myid = this._activatedroute.snapshot.params.id;

    //sma
    console.log(this._activatedroute.snapshot.params.id);
    console.log(this._activatedroute.snapshot.params.price);
    console.log(this._activatedroute.snapshot.params.name);
  }
}
