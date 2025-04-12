const product = {
    title: "pen",
    rating: 4,
    offer: 5,
    price: 300
};
console.log(product);

const profile = {
    username: "Rabin Adhikari",
    isfollow: true,
    followers: 125,
    following: 134,
    detail: "my name is rabin adhikari, i live in kathmandu"
};
console.log(profile);
console.log(typeof profile);

// Conditional statements

// if else condition
let age = 20;
if (age > 18) {
    console.log("can vote");
} else {
    console.log("cannot vote");
}

let mode = "dark";
let color;
if (mode === "dark") {
    color = "black";
} else {
    color = "white";
}
console.log(color);
// if else-if else
let temperature = 18;

if (temperature < 10) {
    console.log("It's cold");
} else if (temperature >= 10 && temperature <= 25) {
    console.log("It's moderate");
} else {
    console.log("It's hot");
}

// question , any input form the user ,check the number is multiple of 5 or not
let num=prompt("enter any number");
if(num%5===0){
    console.log("the number is multiple of 5:",num);
}
else{
console.log("the given number is not a multiple of 5");
}

// enter the grade ,and it will show the grade system
let marks=prompt("enter your marks");
if(marks>=80&&marks<=100)
{
    console.log("A");
}
else if(marks>=70&&marks<80)
    console.log("A-");
else if(marks>=60&&marks<70)
    console.log("B");

else
console.log("fail");