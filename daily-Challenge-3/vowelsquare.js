//This function is use to determine if atleast 2x2 square composed 
// entirely of vowels exists in a specific given matrix.
// 2*2 matrix vowel determinant
function checkVowel(vowelC) {
    // vowelC= ["abcd", "eikr", "oufJ"];
console.log(vowelC);
const vow = /(a|e|i|o|u)/gi
console.log(vowelC.length);
var wordLength =vowelC.length - 1;

var vowelDerive = 0;

for(let j = 0; j < wordLength; j++){
    
    for(let k = 0; k < vowelC[j].length - 1; k++){
        if(vowelC[j][k].match(vow) && vowelC[j][k+1].match(vow) && vowelC[j+1][k].match(vow) && vowelC[j+1][k+1].match(vow)){
                
            if (j > 0 && k>= 0 ) {
                vowelDerive= `${j}-${k}`;
               console.log(vowelDerive);
               break;
                
            }
            

        } 
        
    }
     
}
    
    return vowelDerive;
}
checkVowel(["aqrst", "ukaei", "ffooo"]);