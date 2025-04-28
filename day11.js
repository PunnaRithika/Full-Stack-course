//datatypes
//primitive datatype-string,int,boolean,undefined,null
let data="sunny";
console.log(typeof(data));
let data1=26;
console.log(typeof(data1));
let data2=true;
console.log(typeof(data2));
let data3;
console.log(typeof(data3));
let data4=null;
console.log(typeof(data4));
let data5=545478454575842514n;
console.log(typeof(data5));
//non primitive datatype- array,objects
//arrays
let myArray = ["rithika",1228,true];
console.log(myArray);
const myArray1 = [1,2,3,4];
console.log(myArray1);
console.log(myArray[0]);

//objects
const student={
    name:"Rithika",
    id:1228,
    scholarship:true
}
console.log(student);
console.log(student.id);
//operators-symbols used to perform operations on values and variables like -arthemic,assignment,comparison,logical
//arthimetic-*,+,-,/,%,++,--,(""+ +),(+ +""),**
//assignment-=,+=,-=
//comparision-==(checks without datatypes),===(strict equals to(checks with datatype)),!=,!==(strict not equals to),>,<,>=,<=
//logical-&&,!,||-used for booleans
let value1=2;
let value2=6;
console.log(value1+value2);


//conditional statements-if,else,else if
//if(true){..//print the code...} 
//if(false){....}else{..//print this block...}
//if(flase){..}else if(){....}else if(){...}else{....}

let paidMoney=26;
let taxAmount;
if(paidMoney<10){
    console.log("you are eligible for basic subscription");
    taxAmount=0.04*paidMoney;
    console.log("Tax Amount:", taxAmount);
    
}
else if(paidMoney>10 && paidMoney<20){
    console.log("you are eligible for medium subscription");
    taxAmount=0.08*paidMoney;
    console.log("Tax Amount:", taxAmount);
}
else if(paidMoney>20){
    console.log("you are eligible for premium subscription");
    taxAmount=0.16*paidMoney;
    console.log("Tax Amount:", taxAmount);
}
else{
    console.log("you are not eligible for subscription");
}

//Day 12 -Switch case
let dummyname="Rithwik";
switch (dummyname) {
    case "Rithwik":
        console.log("hello Rithwik");
        break;
    case "Rithika":
        console.log("hello Rithika");
        break;
    default:
        console.log("hello anonymous");
        break;
}
//Day 12-Loops(repeat a block of code multiple times)-for , while, do while, for...of , for...in
//for-it is best if you know how many times the code should be repeated
//for(intialization,condition,inc or dec){ code }
for (let value = 0; value<=5; value++) {
    console.log(value);  
}
//2table print
for (let value = 0; value<=10; value++) {
    console.log(value*2);  
}
//even number
for (let value = 1; value<=10; value++) {
    if (value%2==0) {
        console.log( value,"is the even number");
    }  
}
//sum of n
let son=0;
for (let value = 0; value<=100; value++) {
    son=son+value;  
};
console.log(son); 
//While loop - when we dont know the times of repeatition we use this loop

let i=0;
while (i<=5) {
    console.log(i);
    i++;
}
let isCondition=true;
let value=1;
while (isCondition){
    if(value==15){
        isCondition=false;
    }
    console.log(value);
    value++;
}
//do while- the code runs atleast once even if the condition is false(similar to while loop)
let count=5;
do{
    console.log(count);
    count++;
}while(count<5);
//Array-holds multiple values to loop this array we use the for...of loop
//for...of-used to iterate through arrays
let arrayvalues=[1,2,"data",2,9,true,48];
//syntax-for(initialization of arrayname){code block}
for(let arrayitem of arrayvalues){
    console.log(arrayitem*2); 
    console.log(arrayitem+2);  
}
for(let arrayitem of arrayvalues){
    if(typeof(arrayvalues)==Number){
    console.log(arrayitem*2); 
    }
    else{
    console.log(arrayitem); 
    }
}
//for...in-easy to use to iterate through looping object keys
//syntax-for(let key in objectname or user){ log(key,user[key])}
let studentdetails={
    studentname:"Pandu",
    studentid:1221,
    isplaced:true,
    year:3,
    college: "anurag"
};
for(let key in studentdetails){
    console.log(key, studentdetails[key]);   
}
//functions- a reusable block of code which can be called multiple times 
//syntax-funtction functionName(){code block}
function goodmorning() {
    console.log("Good Morning");    //function declaration
}
goodmorning();
function addition(a,b) {          //function expression
    console.log(a+b);   
}
addition(3,5);
function multiplication(c,d) {
    return c*d;  
}
console.log(multiplication(3,5));
//arrow function
let subtraction =(a,b) =>console.log(a-b);//(parameters)
subtraction(2,1);//( arguments)

const sos=(a=2,b=3)=>{
    let val1=a*a;
    let val2=b*b;
    return val1+val2
}
console.log(sos(undefined,10));


//TASK 1
function sumEvenNumbers(arr) {
    let sum=0;
    for(let number of arr){
        if(number%2==0){
            sum=sum+number;
        }
    }
    return sum;
}
const arr=[1,2,3,4,5,6];
console.log(sumEvenNumbers(arr));


//TASK 2
function repeatString(str,n) {
    let newString="";
    for(let i=1;i<=n;i++){
        newString+=str;
    }
    return newString;
}
console.log(repeatString("hello",4));
