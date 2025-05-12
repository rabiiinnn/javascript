/*for(let i=0;i<5;i++)
{
    console.log("Rabin Adhkari");
}

//while
let i=0;
while(i<5)
{
    console.log("i:",i);
    i++;
}

//Do while for multiple of 2
let x=20 ;
do{
    console.log("Rabin Adhikari");

x++;
}
while(x<10);
// for_of loop and for_in loop
let count=0;
let str="Rabin Adhiakri";
for(let i of str)
{
    console.log("i",i);
    count++;
}
console.log("lenght of string",count);
// formula
//for(let val of strval)

    //ddo work
 
 //for in loop for object

 
const profile = {
    username: "Rabin Adhikari",
    isfollow: true,
    followers: 125,
    following: 134,
    detail: "my name is rabin adhikari, i live in kathmandu"
};
for(let key in profile) // no need for initialization
{
    console.log("key",key,"value=",profile[key]);//return our key(username,isfollow,followers,detail)
}

//print the even number form 1 to 100
let even=0;
for(let i=1;i<=100;i++)
{
    if(i%2==0)
    {
        console.log("even number are",i);
        even++ ;
    }
}
console.log("there are",even,"number are even between 0 and 100");

//question create a game with a random number,aks the user to guess the number until he guess the right
let truevalue=25;
let guessnumber=prompt("guess the True value");
if(truevalue==guessnumber)
{
    console.log("congratulation! you gussed correct number");
  
}
else
{
    console.log("soory ,try next time");
}
    
   let game=45;
   let guess=prompt("guess the number");
   while(guess!=game)
   {
    guess =prompt("you entered wrong number");
   }
   console.log("congratulatio,you entred the correct number");

 // string 
 let name="rabin adhikari";
 console.log(name[0]); // 'r'
 console.log(name[1]);// print the indices 'a'
 console.log(name[2]);
 console.log(name[3]);
 console.log(name[4]);
 */
 //templates literal
 let specialstring="this is for my practic ,working quite good enough to survive";
 console.log(specialstring);

 let profile={
    name:"Rabin Adhikari",
    class:12,
    address:"kathmandu nepal"
 };
 console.log("my name is ",profile.name,"i studied in class",profile.class,"i live in ",profile.address);

 let obj={
    name:"Rabin Adhikari",
    class:12,
    address:"kathmandu nepal"
 };
 let output=`MY name is ${obj.name} i studied in class ${obj.class} i live in ${obj.address}`;
 console.log(output);
let name='this is my age is \n ${2+20+2}';
console.log(name);
console.log(name.length); //lenght of string
console.log(name.toUpperCase()); //uppercase

// concatination
let str1="hello";
let str2="world";
let str3=str2.concat(str1);
console.log(str3); //helloworld
console.log(str3);

let name1="rabinadhikari";
console.log("@"+name1+name1.length );
let intro=prompt("enter your name");
console.log("@"+intro+intro.length);