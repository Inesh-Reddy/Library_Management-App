package library.library_backend;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class BookServiceImpl implements BookService {
    private final List<Book> books = new ArrayList<>();

    @Override
    public String addBook(Book book) {
        for (int i =0; i<books.size(); i++){
            if(books.get(i).getTitle().equals(book.getTitle())){
                return "Title already exists";
            }
        }
        books.add(book);
        return "Book added successfully";
    }

    @Override
    public List<Book> getAllBooks() {
        return books;
    }

    @Override
    public String updateBook(String isbn, Book updatedBook) {
        for (int i = 0; i < books.size(); i++) {
            if (books.get(i).getIsbn().equals(isbn)) {
                books.set(i, updatedBook);
                return "Book updated successfully with the ISBN " + isbn;
            }
        }
        return "Book not found";
    }


    @Override
    public String deleteBook(String isbn) {
        for (int i = 0; i < books.size(); i++) {
            if (books.get(i).getIsbn().equals(isbn)) {
                books.remove(i);
            }
        }
        return "Book deleted successfully with the ISBN " + isbn;
    }

}
