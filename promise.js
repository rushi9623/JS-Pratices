function fun (task){
    return new Promise ((resolve,rejecte)=>{
        if(task){
            resolve("completed");

        }
        else {
            rejecte("not completed");
        }
    }
)
}

let onResolve = (res)=>{
    console.log(res);
}
 
let onReject = (err)=> {
    console.log(err);
}
fun(false).then(onResolve).catch(onReject) 