// ? ==========================================================
// ?                    FONKSİYONLAR
// ? ==========================================================

// !-----------------------------------------------------------
// !3.YÖNTEM  : ARROW FUNCTIONS
// !-----------------------------------------------------------

console.log("****** 3- ARROW FUNCTIONS ******");

// //!Funct expression ve arrow func yontemlerinde
// //! Once fonks tanimlanmalidir sonra cagrilmalidir. Hoisting desteklenmez
// //! Aksi takdirde hata alırsiniz.

const Selamla=()=>{
    console.log("Merhaba");
}

const selamla=()=>console.log("Mehaba");

// *** Örnek 1 Parametre alan */

// const control=(num)=>{
//     result=num %3===0 ? "3 ün katıdır": "ün katı değildir"
//     return result
// }
// console.log(control(45));

const control=(num)=>num %3===0 ? "3 ün katıdır": "ün katı değildir"

console.log(control(45));

// const toplam =(x,y)=>x+y
// console.log(toplam(24,33));

const add = (a,b)=> a+b
console.log(add(6,8));


const hacim=(r,h)=> Math.PI*r**2*h
console.log(hacim(2,5));

// const hacimhesap=(r,h)=>{
//     sonuc=Math.PI*r**2*h
//     console.log(sonuc)
//     return
// }
// hacimhesap(1,5)


const maxbul=(a,b)=> a>b ? "a Değeri büyüktür" : "b değeri büyüktür"
console.log(maxbul(4,21));

const asal=(num)=> {
    if (num <=1) return "Sayı asal değil";
    for(let i=2; i<=Math.sqrt(num);i++){
        if(num%i===0) return"Sayı asal değil";
    }
    return"Sayı asal"
}
console.log(asal(13));
