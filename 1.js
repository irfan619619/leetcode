
  

 function single(n){
    let result=0;
    for (let num of n){
        result ^=num;
    }
    return result;
 }
 let n=[4,1,2,1,2]
 console.log(single(n));
 



