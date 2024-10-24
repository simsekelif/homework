// 2) Initiate a variable answer as 0. Then iterate through numbers between 1 and 100:
let answer = 0;

for ( let i = 1; i <= 100; i++){
    
    // If the number is divisible by both, don't change the sum. Instead, print "I don't know what to dooo
    if( i % 35 === 0) {
        console.log("I don't know what to doooo!")
    } else if (i % 5 === 0) {
        answer = answer + i;
    } else if ( i % 7 === 0 ) {
        answer = answer - i;
    }

}
console.log(answer);