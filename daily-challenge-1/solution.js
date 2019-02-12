
var library =

[
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


function mapArray(status){
    const authorValue = status.map((value)=>{
        return value.author;
    })
    
    const titleValue = status.map((value)=>{
        return value.title;
    })
    
    const readingstatusValue = status.map((value)=>{
        return value.readingStatus;
    })
    
    
    
    for(let i = 0; i < status.length; i++) {
         
    
        console.log(`Author: ${authorValue[i]}  Title: ${titleValue[i]}  Reading Status: ${readingstatusValue[i]} `);
        
    }

};
mapArray(library)





const stringCount = function(value) 
{
  var subsetstring = [];
  for (var i = 0; i < value.length; i++) 
  {
    for (var k = i+1; k<value.length+1; k++) 
    {
      subsetstring.push(value.slice(i,k));
    }
  }
  return subsetstring;
};

console.log(stringCount("dog"));








    



    