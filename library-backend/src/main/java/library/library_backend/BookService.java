package library.library_backend;

import java.util.List;


public interface BookService {
    String addBook(Book book);
    List<Book> getAllBooks();
    String updateBook(String isbn, Book updatedBook);
    String deleteBook(String isbn);
}

