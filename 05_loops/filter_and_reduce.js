// filter method
// The filter() method is used to create a new array with all elements that pass the test implemented by the provided function.
const nums = [1,2,3,4,5,6];

const myNewNums = nums.filter( (num) => num > 4);
const myNewNums2 = nums.filter( (num) => {
    return num > 2;
});

console.log(myNewNums);
console.log(myNewNums2);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  const HistoryBooks = books.filter( (bt) => {
    return bt.genre === 'History';
  })

  console.log(HistoryBooks);

  // map method
    // The map() method is used to create a new array with the results of calling a provided function on every element in the calling array.

    const bookTitles = books.map( (bt) => {
        return bt.title;
    })

    console.log(bookTitles);

    // chaining filter and map
    const bookTitlesHistory = books
    .filter( (bt) => bt.genre === 'History')
    .map( (bt) => bt.title);

    console.log(bookTitlesHistory);

    // reduce method
    // The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
    const number = [1,2,3,4,5,6,7,8,91,0];

    const mynums = number.reduce( (acc,num) => {
        console.log(`acc: ${acc}, num: ${num}`);
        return acc + num;
    },0)

    console.log(mynums);