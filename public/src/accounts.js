function findAccountById(accounts, id) {
  let result = accounts.find(account => account.id === id);
  return result;
  }
  
  function sortAccountsByLastName(accounts) {
    let result = accounts.sort((accountA, accountB) => 
    { return accountA.name.last > accountB.name.last ? 1 :-1
    });
   return result;
  }
  
  function getTotalNumberOfBorrows(account, books) {
    const accId = account.id;
    let total = 0;
    books.forEach(book => book.borrows.forEach(borrow => accId === borrow.id && total++));
    return total;
  }
  
  function getBooksPossessedByAccount(account, books, authors) {
    const bookList = books.filter((book)=>{
      const currentBook = book.borrows[0];
      return !currentBook.returned && currentBook.id === account.id;
    }).map((book)=> {
      const author =authors.find((author)=> {
        return author.id === book.authorId;
      });
      return {...book, author};
    });
    return bookList;
  }
  

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
