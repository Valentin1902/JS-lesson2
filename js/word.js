const word = "SaMSung" 
let convertedWord = 0;
for(let i = 0; i < word.length; i += 1){
    console.log(word[i]);
    if(word[i] === word[i].toUpperCase()){
        convertedWord += word[i].toLowerCase();
    
} else {
    convertedWord += word[i].toUpperCase();
}
}