//1) Print all numbers between 42 and 173 that are divisible by 13, but not by 6. 

for(let i = 42; i<= 173; i++) {
    
    // x'in 13 ile bölümünden kalan 0 olmalı. 
    let kalan = i % 13;
    
    // eğer öyleyse 
    if(kalan === 0) {
        // bu sayının 6 ile bölümünden kalanı 0 farklı olmalı.
        kalan = i % 6; 
        if(kalan !== 0) {
            console.log(i);
        } else {
            //bu sayıyı atla
            continue;
        }
    } else {
        // bu sayıyı atla
        continue;
    }


}