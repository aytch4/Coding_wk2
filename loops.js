//A while loop that prints all even numbers from 0 to 100
let i = 0;

while (i < 101) {
    if (i % 2 == 0) {
        console.log(i);
    } i++;
}


//A while loop that prints every 3rd number going backwards from 100 until we reach 0
let a = 100;
    
while (a > 0) {
    console.log(a);
    a -= 3;
}
   
//A for loop that prints every other number from 1 to 100

for (let i = 1; i < 100; i +=2)
    console.log(i)

//A for loop that prints every number from 0 to 100, but if the number is divisible by 3, it prints “Hello” instead of the number, and if the number is divisible by 5, it prints “World” instead of the number, and if it is divisible by both 3 and 5, it prints “HelloWorld” instead of the number.

for (let i = 1; i < 100; i++)
    if (i % 3 == 0) {
        console.log("Hello")
    }
    else {
        console.log(i)
    }