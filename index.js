let B = false,
    I = false,
    N = false,
    G = false,
    O = false;
function newNumber(maxNumber) {
    let x = Math.floor(Math.random() * maxNumber) + 1;
    if (x <= 15) {
        B = true;
        console.log('The number is in B');
    } else if (x >= 16 && x <= 30) {
        I = true;
        console.log('The number is in I'); 
    } else if (x >= 31 && x <=45) {
        N = true;
        console.log('The number is in N');
    } else if (x >= 46 && x <=60) {
            G = true;
            console.log('The number is in G');
    } else if (x >= 61 && x <=75) {
        O = true;
        console.log('The number is in O');
    }
    else{
        console.log('the number is invalid');
    }

     if (B == true && I == true && N == true && G == true && O == true) {
        console.log('BINGOOO!!!');
}
return console.log(x);
}
