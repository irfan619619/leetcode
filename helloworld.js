let helloworld=function(){
    return function(){
        return "hello world"
    }
}
let result=helloworld()
console.log(result());
