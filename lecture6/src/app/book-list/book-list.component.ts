import { Component, OnInit } from '@angular/core';
import { Book } from 'src/shared/models/book-model';
import { BookService } from 'src/shared/services/book.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  bookList: Book[];

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookList = this.bookService.getBookList();
  }

  onDelete(id: string){

    this.bookService.removeBook(id);

    this.bookList = this.bookService.getBookList();

  }

  onAdd(){
    let book: Book = {id: uuidv4(), title: "book", price: "10" };

    this.bookService.addBook(book);
  }

  onUpdate(id: string){
    let updatedBook: Book = {id: id, title: "book33333", price: "10333" };
    
    this.bookService.updateBook(updatedBook)
  }
}
