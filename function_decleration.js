// ? =========================================================
// ?                    FONKSİYONLAR
// ?==========================================================

//!----------------------------------------------------------
//! 2.YÖNTEM  : FUNCTION EXPRESSION
//!-----------------------------------------------------------

//**********************************************************/
//! * --------Function-Expression----------------------------*/
// 1-Fonksiyon bir değişkene tanımlanır.
// 2-Function kelimesini ardından fonksiyonun ismi verilir.
// 3-Sonra da bir parantez açılıp kapatılır.

// const adYazdir=function(ad){
//     console.log(ad);
// }
// adYazdir("Ali")

// console.log(x)
// var x=5

// console.log(y)

// let y=5

// const isEvenOdd=function(num){
//     let result=num %2===0 ? "Sayı çifttir" : "Sayı tektir"
//     console.log(result);
//     return result     

// }
// console.log(isEvenOdd(27));

const enbuyuksayi=function(x,y,z){
  let enbuyuk= Math.max(x,y,z)
  return enbuyuk
}
console.log(enbuyuksayi(7,12,15));