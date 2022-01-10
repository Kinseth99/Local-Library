function getTotalBooksCount(books) {
  let total = 0;
  for (let i=0; i<books.length; i++)
 { total ++;
}
return total
}

function getTotalAccountsCount(accounts) {
  let counter=0;
  for (let i=0; i<accounts.length; i++)
  {
    counter ++;
  }
  return counter;
}

function getBooksBorrowedCount(books) {
 
  let result = books.reduce((book, borrow) => {
    let returns = borrow.borrows[0].returned;
    if (!returns) book++; 
    return book; 
  }, 0);
  return result;
}

function getMostCommonGenres(books) {
  let genreCount = {};
  books.forEach((number) => {
   if (genreCount[number.genre]) {
    genreCount[number.genre]++;
   } else {
    genreCount[number.genre] = 1;
   }
  });

  return Object.entries(genreCount)
   .map(([name, count]) => {
    return {
     name,
     count
    };
   })
   .sort((least, most) => most.count - least.count)
   .slice(0, 5);
 }

  function getMostPopularBooks(books) {
  return books.map((book) => {
    return { name:book.title, count: book.borrows.length};
  }).sort((most, least) => (most.count < least.count ? 1 : -1))
  .slice(0, 5)
  }

function getMostPopularAuthors(books, authors) {
 let result = [];
 authors.forEach((author)=> {
   let theAuthor = {
     name:`${author.name.first} ${author.name.last}`, 
     count: 0
   };
   books.forEach((book) => {
     if (book.authorId === author.id) {
       theAuthor.count += book.borrows.length;
     }
   });
   result.push(theAuthor);
 });
  //user helper function to sort and limit array
return shortenArray(result);
}


function shortenArray(arrayToShorten) {
  arrayToShorten.sort((indexA, indexB) =>
  indexA.count < indexB.count ? 1 : -1
  );
  const shortened = arrayToShorten.slice(0, 5);
  return shortened;
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};

