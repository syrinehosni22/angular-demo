import { Component } from '@angular/core';
import { BookService } from '../services/book.service';
import { Book } from '../model/book';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {
  constructor(private BookService:BookService,private router : Router){}
  AddBook(book:Book){
this.BookService.addBook(book);
this.router.navigate(['/Home']);
  }
}
