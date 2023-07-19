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
   book:Book|undefined;
constructor(private actRoute : ActivatedRoute, private router : Router,private BookService :BookService){}

ngOnInit() {
  
  this.actRoute.paramMap.subscribe(
    {
      next : (p : ParamMap) => {
        this.book = this.BookService.getBookById( Number(p.get("id")));
      }
    }
  )

}
EditBook(uBook:Book){

}
}
