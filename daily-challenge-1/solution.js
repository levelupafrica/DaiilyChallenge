/**Solve the following challenges

Deadline: 11pm 12-02-2019

Create a file called solution.js and add your functions to it. 
Commit this file, push to your repo and submit a pr.

Write a JavaScript program to display the reading status 
(i.e. display book name, author name and reading status) of the following books.

var library =
[ {author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }, 
{ author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, 
{ author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', 
readingStatus: false } ];

Write a JavaScript program which returns a subset of a string.
Sample Data: dog Expected Output: ["d", "do", "dog", "o", "og", "g"]

Note all functions should be in the same Javascript file. Goodluck.
 */

const library = [
    {
        author: 'Bill Gates', 
        title: 'The Road Ahead', 
        readingStatus: true 
    }, 
    { 
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true 
    }, 
    { 
        author: 'Suzanne Collins', 
        title: 'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    } 
];

class StateLib {

    readStatus(theArray){
        if(!Array.isArray(theArray)){
            return;
        }
        theArray.forEach(function(books, index){
            console.log(`Book ${++index}. ${books.readingStatus}`);
        });
    }

    /**
     *    var string = "geeksforgeeks"; 
    a = string.substring(0, 4) 
    b = string.substring(1, 6) 
    c = string.substring(5) 
    d = string.substring(0) 
  
    // Printing new string which are 
    // the part of the given string 
    document.write(a + "<br>"); 
    document.write(b + "<br>"); 
    document.write(c + "<br>"); 
    document.write(d + "<br>"); 
     */

    subSet(parameter, n){
        if(!parameter === " "){
            return;
        }
        //let subArray = [];
        for (let i = 0; i < n; i++){

            for (let j = i+1; j <= n; j++){
                console.log(parameter.substring (i, j));

           } 
        }         
    }

}//End of Class

let stateLib = new StateLib();
stateLib.readStatus(library);
stateLib.subSet("defkawrf", 5);