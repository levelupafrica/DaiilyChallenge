function letterCapitalize(str){

    let tt = str.split(" ");
    let temp = "";
    for(let i = 0; i <tt.length; i++){
        let te = tt[i].charAt(0).toUpperCase();
    
        let tf  = tt[i][0].toUpperCase();
        for(let j = 0; j<tf.length; j++){
        let ty = tt[i].replace(tt[i][0], tf[j]);
        console.log(ty);
        }
    }
    
}

letterCapitalize("hello world people");





