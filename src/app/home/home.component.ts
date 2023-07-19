import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import{BookService}from'../services/book.service'
import { Book } from '../model/book';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
  tableData=this.BookService.ListBook;
  searchResults:Book[]=this.tableData;
  searchTerm: string = 'Search';

  constructor(private BookService:BookService ,private router :Router){}

  editLivre(book:Book){
    this.router.navigate(['/EditBook/'+book.isbn]);
  }

  deleteLivre(book:Book){
    this.BookService.deleteLivre(book);

  }
  // serch by title
  search() {
    this.searchResults = this.tableData.filter(book => {
      return book.title.toLowerCase().includes(this.searchTerm.toLowerCase());
    });
  }
};



