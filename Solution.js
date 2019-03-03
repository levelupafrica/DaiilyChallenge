const library =[ 
    {
        author: 'Bill Gates', 
        title: 'The Road Ahead', 
        readingStatus: true }, 
        
    { 
        author: 'Steve Jobs', 
        title: 'Walter Isaacson', 
        readingStatus: true }, 
    { 
        author: 'Suzanne Collins', 
        title: 'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false } 
    ];

    var list = [];

    function listStatus(data){
        if(!Array.isArray(data)){
            return;
        }
        
        var list = library.map(function (status){
            return status.author + " " + status.readingStatus;
        });

        return list;
    }

console.log(listStatus(list));

//Second Solution
function getAllSubstrings(str) {
    var i, a, 
    result = [];
  
    for (i = 0; i < str.length; i++) {
        for (a = i + 1; a < str.length + 1; a++) {
            result.push(str.slice(i, a));
        }
    }
    return result;
  }
  
  var myString = 'dog';
  console.log(getAllSubstrings(myString));

