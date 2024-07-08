/* ---------------------------------- */
/*       FONKİYONLAR - RECURSIVE      */
/* ---------------------------------- */


const toplam=(n)=>{
    let toplam=0;
    for (let i=1; i<=n;i++){
        toplam= toplam +i
    }
    console.log(toplam);
}
toplam(8)

const toplamlar=(n)=> {
    if (n<1){
        return n
    }
    else{
        
    return toplamlar(n-1) + n
}
}
console.log(toplamlar(8));


const fact=(n)=>{
    if(n===1){
       return n
    }
    else return n* fact(n-1)
}
console.log(fact(5));


const fib=(n)=>{
    if(n===1)return 2
    if (n<=2){
       
    }
    else if ( n === 2){
        return 1
    }
    else return n* fib(n-1) + fib(n-2)
}
console.log(fib(6));