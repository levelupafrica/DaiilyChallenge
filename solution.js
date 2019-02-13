function getReadingStatus(array) {
        array.forEach(element => {
        let readingStatus =  'Not Reading';
        if (element.readingStatus === true) {
            readingStatus = 'Reading'
        }
        console.log(`Book Title: ${element.title}, Author: ${element.author}, ${readingStatus} the book`);
    });
}
var library = [ {author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }, 
{ author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, 
{ author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false } ];
function getAllSubstrings(str) {
    var i, j, result = [];
  
    for (i = 0; i < str.length; i++) {
        for (j = i + 1; j < str.length + 1; j++) {
            result.push(str.slice(i, j));
        }
    }
    return result;
  }
  console.log(getReadingStatus(library));
console.log(getAllSubstrings('dog'));
