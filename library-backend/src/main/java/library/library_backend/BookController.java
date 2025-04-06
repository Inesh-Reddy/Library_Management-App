package library.library_backend;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping
public class BookController {

    private final BookService bookService;

    @Autowired
    public BookController(BookService bookService) {
        this.bookService = bookService;
    }

    @PostMapping("/books")
    public String addBook(@RequestBody Book book) {
        return bookService.addBook(book);
    }

    @GetMapping("/books")
    public List<Book> getAllBooks() {
        return bookService.getAllBooks();
    }

    @PutMapping("/books/{isbn}")
    public String updateBook(@PathVariable String isbn, @RequestBody Book updatedBook) {
        return bookService.updateBook(isbn, updatedBook);
    }

    @DeleteMapping("/books/{isbn}")
    public String deleteBook(@PathVariable String isbn) {
        return bookService.deleteBook(isbn);
    }

}
