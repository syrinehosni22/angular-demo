import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import {  EditBookComponent} from './edit-book/edit-book.component';
import { HomeComponent } from './home/home.component';
import {  ViewBookComponent} from './view-book/view-book.component';
const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full'},
  { path: 'Home', component: HomeComponent },
  { path: 'ViewBook/:bookId', component: ViewBookComponent },
  { path: 'AddBook', component: AddBookComponent },
  { path: 'EditBook/:bookId', component: EditBookComponent } 
];
 @NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }