generateNumber(15);

function generateNumber(max){    
    let randomNumber = Math.floor(Math.random() *max) + 1;

    if (randomNumber <= 15){
        console.log('the Number is in B.');
    }
    else if(randomNumber >= 16 && randomNumber <= 30){
        console.log('the number is in I');
    }
    else{
        console.log('the number is invalid');
    }

    return console.log(randomNumber);
}