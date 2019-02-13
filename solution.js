var library =
[ 
    {
        author: 'Bill Gates', 
        title: 'The Road Ahead', 
        readingStatus: true 
    },
    
    { author: 'Steve Jobs', 
    title: 'Walter Isaacson', 
    readingStatus: true
 }, 
    
 { 
     author: 'Suzanne Collins', 
     title: 'Mockingjay: The Final Book of The Hunger Games',
      readingStatus: false
 } 

];
 
        
library.forEach(function(reader){
    console.log(`Author name is: ${reader.author}, Book Title is: ${reader.title},
     Reading Status: ${reader.readingStatus}`);
});

var subSet = "dog";
var subSetArray = []
subSetArray.push(subSet.substring(0,1));
subSetArray.push(subSet.substring(0,2));
subSetArray.push(subSet.substring(0,3));
subSetArray.push(subSet.substring(1,2));
subSetArray.push(subSet.substring(1));
subSetArray.push(subSet.substring(2));

console.log(subSetArray);

