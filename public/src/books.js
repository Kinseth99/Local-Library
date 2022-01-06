function findAuthorById(authors, id) {
  let result = authors.find(author => 
   author.id === id);
   return result;
  }
 
 function findBookById(books, id) {
   let result = books.find(book => 
     book.id === id);
     return result;
 }
 
 function partitionBooksByBorrowedStatus(books) {
   let borrowed = books.filter((book) => book.borrows.some((borrow) => borrow.returned=== false)
 );
    let returned = books.filter((book) => book.borrows.every((borrow) => borrow.returned===true)
 );
   //helper function
 let result = [[...borrowed], [...returned]];
   return result;
 }
 
 function getBorrowersForBook(book, accounts) {
  return book.borrows
  .map((borrow) => {
    let account = accounts.find((account) => 
    account.id === borrow.id);
 
    return { ...borrow, ...account };
   })
   .slice(0, 10);
 }

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
