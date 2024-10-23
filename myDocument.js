//1) Print all numbers between 42 and 173 that are divisible by 13, but not by 6. 

for(let i = 42; i<= 173; i++) {
    

    let leftFrom13 = i % 13;
    let leftFrom6 = i % 6; 
    

    if(leftFrom13 === 0 && leftFrom6 !== 0) {

        console.log(i);
    } 


}