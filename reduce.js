let reduce=(arr,fn,init)=>{
    result=init;

    for(i=0;i<arr.length;i++){
        result=fn(result,arr[i])

    }
    return result;


}
let arr=[1,2,5];
let fn=(sum,add)=>sum+add
let init=10

console.log(reduce(arr,fn,init));
