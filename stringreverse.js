let str="irfan";
let reversed="";

if(str===""){
    console.log("empty bro");
    
}else{
    for(let i=str.length-1;i>0;i--){
        reversed +=str[i]
    }
}
console.log(reversed);
