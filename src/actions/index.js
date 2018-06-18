export function selectBook(book) {
    console.log('A book was selected', book.title);
    return {
      type: 'BOOK_SELECTED',
      payload: book
    };
}