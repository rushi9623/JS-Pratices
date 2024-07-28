/*let str = [44   ,77,88,55];
let strr = str.toString();
console.log(strr);


let emp = {
    fristName : "Rushi",
    lastName :"ughade",
    id : "ab",
    Salary : 800000
};
console.log(delete emp.id)
console.log(emp); *

let arr = ["Hi"];
let brr = ["MY"];
let crr = ["Name is rushi"]

let newarr = arr.concat(brr,crr);
console.log(newarr) *
let numarr = [ 10,22,30,]

numarr.push(60);
numarr.push(70,80,90);

let str = [ "hii","hello","how"];
str.push("are","you")

console.log(numarr);
console.log(str);
*

let arr = [88,55,55,66,88,70,66,22,44,1,2,3,1,4,5,6,40, 22];

console.log (arr.reverse)
function arrayy(arr) {
    // Remove duplicates
    let uniqueArr = arr.filter((item, index) => arr.indexOf(item) === index);
    // Sort the array in ascending order
   // uniqueArr.sort((a, b) => a - b);
    return uniqueArr;
}

console.log(arrayy(arr)); *




let arr = [ 1,2,3,11,1,22,9,,8,7,5,3,1,11,111,22,111];

function removeDuplicates(arr) {
    return arr.filter((item,index)=> arr.indexOf(item)===index);

}

console.log(removeDuplicates(arr));

setTimeout(function  yehai (){
console.log("Pratics Makes Me perfect")
},5000);

setTimeout(()=> {
    console.log("badiya chal rha hai ")
}, 5000);  *
function fun (val){
    console.log(val)
}
function add (a,b,callback){
    let sum = a+b;
    callback(sum);
}

add(5,10,fun)
*/
 
/*
function fun (val) {
    console.log(val)
}
function aadd (b,c,callback){
    let sum = b*c;
    console.log(sum)
}

aadd(88,10,fun)  *

function hello (how){
    console.log(how)
}
function hie (D,C,hey) {
    let sum = D**C;
    console.log(sum);
}

hie (90,10,hello); */

/*
function ghoda(unth){
    console.log (unth);
}

function Raja ( R,J){
    let sum = R*J,vazer;
    console.log(sum);
}

Raja(88,88,ghoda) 


*
function Mystrey ( node){
    console.log(node);
}


function script( j,S,callback ){
    let sum = j+S;
    console.log(sum);

}

script(55,55,Mystrey)  *


let arr = ["hello", "hie","myphase","hie","hello"]

function duplicate(arr) {
   return [...new Set(arr)].reverse();
}

console.log(duplicate(arr));

console.log(duplicate(arr).reverse); *


let arr = ["hello", "hie", "myphase", "hie", "hello"];

function duplicateAndReverse(arr) {
    return [...new Set(arr)].reverse();
}
*

//console.log(duplicateAndReverse(arr));


let brr =[55,66,8,99,55,66,77,22,66,99,88]

function alt (brr){
    return [... new Set(brr)];

}

console.log(alt(brr));


let buds = [55,66,8,99,55,66,77,22,66,99,88,98,88]

function pods (buds){
    return [...new Set(buds)].sort().reverse();
}

console.log(pods(buds)); */
let x = 8;
let y = 8;
let z = x+y;

console.log(x==y)
console.log(z)

let buds = [55,66,8,99,55,66,77,22,66,99,88]
const largest = (arr)=>{
    firsstlargeval=Math.max(...arr)
    return(firsstlargeval)

}
console.log(largest(buds));


let budds = [55,66,8,99,55,66,77,22,66,99,880]

const main = (arr)=>{
    mota=Math.max(...arr)
    return(mota)
}
console.log(main(budds))

let udds = [55,66,8,99,55,66,7777,22,66,99,880]

let sum = (arr)=>{
    fun =Math.max(...arr)
    return(fun)
}
console.log(sum(udds));


let arr =[
    {name:"King",age : 22},
    {name:"BKing",age : 32},
    {name:"Cking",age : 42},
    {name:"DKing",age : 52},
    {name:"Ming",age : 992},
    {name:"Aing",age : 32},
    {name:"Sing",age : 42},
    {name:"xing",age : 52},
    {name:"zing",age : 62},
    {name:"ving",age : 72},
    {name:"ding",age : 82},
    {name:"ming",age : 92},

]

let newarr = arr.filter((item)=>{
    return item.age>50
})
console.log(newarr)


let crr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]

let newcrr = crr.filter((item)=>{
    return item%2===0
}
)

console.log(newcrr)

let crrr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

let newcrrr = crrr.filter((item)=>{
    return item%2===0
})
let newcrrrr = crrr.filter((item)=>{
    return item%2 ==1
})
console.log(newcrrr)
console.log(newcrrrr)
console.log(crrr===crr)

let rrr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
let sumof = (arr)=>{
    return arr.reduce((pre,curt)=>{
    return pre+curt;
    })

}
console.log(sumof(rrr));

let rr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
let sumoof = (arr)=>{
    return arr.reduce((prev,curt)=>{
        return prev*curt;
    })
}

console.log(sumoof(rr))