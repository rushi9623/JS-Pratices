function fun(val){
    console.log(val);
}

function add (a,b,callback){
    let sum = a**b;
    callback(sum)
}

add(55,10,fun)