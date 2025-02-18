function compose(functions){
    if(functions.length===0){
        return(x)=>x;
    }

    return function(x){
        return functions.reduceRight((acc,fn)=>fn(acc),x);
    };
}

let f1=(x)=>x+1;
let f2=(x)=>x*2;
let f3=(x)=>x-3;

let composedFun=compose([f1,f2,f3]);

console.log(composedFun(4));
