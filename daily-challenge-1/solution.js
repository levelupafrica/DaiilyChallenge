//Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.
var library =[
    {author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }, 
    { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true },
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }
];

var readingStatus= library.filter(function(status){
    return status;
  }) 
  .map(function(status){
    return status;
  });
 
  console.log(readingStatus); 


//Write a JavaScript program which returns a subset of a string.
//Sample Data: dog Expected Output: ["d", "do", "dog", "o", "og", "g"]
var string = "vanilla"
String.prototype.sub_String = function(){
    var subset =[];
    for (i = 0; i < this.length; i++)
    {
        for ( j= i+1; j < this.length+1; j++)
        {
            subset.push(this.slice(i, j));
        }
    }
    return subset;
};
console.log(string.sub_String());
