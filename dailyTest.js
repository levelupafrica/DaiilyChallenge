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


function mapArr(status){
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
mapArr(library)





const arrSub = function(value) 
{
  var subsetstr = [];
  for (var d = 0; d < value.length; d++) 
  {
    for (var b = d+1; b<value.length+1; b++) 
    {
      subsetstr.push(value.slice(d,b));
    }
  }
  return subsetstr;
};

console.log(arrSub("dog"));