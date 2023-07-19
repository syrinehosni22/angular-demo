import { Component } from '@angular/core';
import { Book } from '../model/book';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent {
  book: any = {}; // Initialize book as an empty object or with default values
constructor(private actRoute : ActivatedRoute, private router : Router,private BookService :BookService){}

ngOnInit() {
  
  this.actRoute.paramMap.subscribe(params => {
    // Obtenez l'ID à partir des paramètres de l'URL
    const id = params.get('bookId');
    
    // Faites ce que vous voulez avec l'ID, par exemple, affichez-le dans la console
    console.log('ID extrait depuis l\'URL :', id);
    this.book=this.BookService.getBookById(Number(id))
   
  });

}
EditBook(uBook:Book){
this.BookService.updateBook(this.book);
this.router.navigate(['/Home'])
}
}
