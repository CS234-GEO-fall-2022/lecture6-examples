import { Injectable } from '@angular/core';
import { Book } from '../models/book-model';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  bookList: Book[];

  constructor() {
    this.bookList = [
      {id: uuidv4(), title: "title1", price: "10.5"},
      {id: uuidv4(), title: "title2", price: "20.5"},
      {id: uuidv4(), title: "title3", price: "30.5"},
      {id: uuidv4(), title: "title4", price: "40.5"},
      {id: uuidv4(), title: "title5", price: "50.5"},
    ]
   }

   public getBookList(): Book[]{
    return this.bookList;
   }

   public addBook(book: Book){
    this.bookList.push(book);
   }

   public removeBook(id: string){
    this.bookList = this.bookList.filter(e => e.id != id);
   }

   updateBook(updatedBook: Book) {
     this.bookList.forEach(e => {
        if(e.id == updatedBook.id){
          e.title = updatedBook.title;
          e.price = updatedBook.price;
        }
     });
   }
}
