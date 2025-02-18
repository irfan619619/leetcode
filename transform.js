let map=function(arr,fn){
    result=[];
    for(let i=0;i<arr.length;i++){
        result.push(fn(arr[i]))
}
return result;

}
let arr=[1,2,3];
let fn=(i)=>i+1

console.log(map(arr,fn))
