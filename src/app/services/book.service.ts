import { Injectable } from '@angular/core';
   
    
import { Book } from '../model/book';
     
@Injectable({
  providedIn: 'root'
})
export class BookService {
     
   
  constructor() { }
  ListBook :Book[] = [
    { isbn: 123456, title: 'Book 1', auteur: 'Author 1' },
    { isbn: 789012, title: 'Book 2', auteur: 'Author 2' },
    // Add more data as needed
  ];

  getBookById(isbn:number ) {
    return this.ListBook.find(cand => cand.isbn == isbn)
  }
  addBook(book:Book) {
    this.ListBook.push(book);
  }

  deleteLivre(book:Book) {
    let i = this.ListBook.indexOf(book);
    this.ListBook.splice(i, 1)
  }
  updateBook(uBook:Book) {
    let i = this.ListBook.indexOf(uBook);
    this.ListBook[i] = uBook

  }
  
}