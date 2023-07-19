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
  constructor(private BookService:BookService ,private router :Router){}
  tableData=this.BookService.ListBook;

  editLivre(isbn:number){
    this.router.navigate(['/EditBook/'+isbn]);
  }

  deleteLivre(book:Book){
    this.BookService.deleteLivre(book);

  }
};



