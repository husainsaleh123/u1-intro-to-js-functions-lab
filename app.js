/*Exercise 1: maxOfTwoNumbers()*/

const maxOfTwoNumbers = (x, y) => {
  if (x >= y) {
    return x;
  } else {
    return y;
  }
}

console.log('Exercise 1 Result:', maxOfTwoNumbers(4, 9));


/*Exercise 2: isAdult()*/

function isAdult(age){
    if (age < 18){
        return 'Minor';
    }
    else{
        return 'Adult';
    }
}


console.log('Exercise 2 Result:', isAdult(21));


/*Exercise 3: isCharAVowel()*/

function isCharAVowel(char){
    const lowerChar = char.toLowerCase();
    if (lowerChar === 'a'|| lowerChar === 'e' || lowerChar === 'o' || lowerChar === 'u' || lowerChar === 'i'){
        return 'true';
    }else{ 
        return 'false';
    }
}


console.log('Exercise 3 Result:', isCharAVowel("A"));


/*Exercise 4: generateEmail()*/

function generateEmail (name, domain){
    return (`${name}@${domain}`)
}

console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));

/*Exercise 5: greetUser()*/

function greetUser (name, time){
    return (`Good ${time}, ${name}!`)
}

console.log('Exercise 5 Result:', greetUser("Sam", "evening"));


/*Exercise 6: maxOfThree()*/

function maxOfThree(x, y, z){
    if (x >= y && x >= z){
        return x;
    }else if (y >= x && y >= z){
        return y;
    }else{
        return z;
    }

}

console.log('Exercise 6 Result:', maxOfThree(5, 10, 24));


/*Exercise 7: calculateTip()*/

function calculateTip (bill, tip){
    let tipAmount = bill * (tip/100);
    return tipAmount;
}

console.log('Exercise 7 Result:', calculateTip(50, 20));


/*Exercise 8: convertTemperature()*/

function convertTemperature (temp, scale){
    if (scale === 'F' || scale === 'f'){
        return (temp - 32)*5/9;
    }else{
        return (temp * 9/5) + 32;
    }
}

console.log('Exercise 8 Result:', convertTemperature(32, "C"));


/*Exercise 9: basicCalculator()*/

function basicCalculator (num1, num2, operation){
    if (operation === 'add'){
        return num1 + num2;
    }else if (operation === 'subtract'){
        return num1 - num2;
    }else if (operation === 'multiply'){
        return num1 * num2;
    }else if (operation === 'divide'){
        return num1/num2;
    }else{
        return  "Invalid operation";
    }
}

console.log('Exercise 9 Result:', basicCalculator(10, 5, "subtract"));