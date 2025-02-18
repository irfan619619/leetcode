let filter=function(arr,fn){
    let result=[];
    for(let i=0;i<arr.length;i++){

        if(fn(arr[i],i)){
            result.push(arr[i])
        }
    }
    return result;
}

let arr=[5,10,20];
let fn=(n,i)=>i===0;

console.log(filter(arr,fn));
