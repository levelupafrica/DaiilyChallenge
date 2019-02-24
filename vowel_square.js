# DaiilyChallenge(24-02-2019)

function VowelSquare(strArr) {
    var vowels = 'aeiou'.split('');
    for (let i = 0; i < strArr.length-1; i++) {
        for (let j =0; j < strArr[i].length-1; j++) {
            if (vowels.indexOf(strArr[i][j]) !=-1 && vowels.indexOf(strArr[i][j+1]) !=-1 && vowels.indexOf(strArr[i+1][j]) !=-1 && vowels.indexOf(strArr[i+1][j+1] !=-1)) {
                return `${i} - ${j}`;
        
            }
        }
    }
    return 'not found';
}
console.log(VowelSquare(["aqrst", "ukaei", "ffooo"])); 
console.log(VowelSquare(["gg", "ff"])); 
console.log(VowelSquare(["abcd", "eikr", "oufj"])); 
console.log(VowelSquare(["aliu","tola","dapo","joye"]));
