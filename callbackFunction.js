//? ====================================================
// ?              FONKSİYONLAR - CALLBACK
// ? ====================================================

// Normal fonksiyon tanımı
// a : argument
function deneme(a){
    console.log(a)
}

// 67 değeri parametre
deneme(67)

//*** Callback function */
// JavaScript'te callback fonksiyonları, bir fonksiyonun başka bir fonksiyona argüman olarak geçirilip, bu fonksiyonun daha sonra çağrılması prensibine dayanır.

function ilkfonksiyon(a){
    console.log("ilk fonksiyon");
    a()

} 

function ikincifonksiyon(){
    console.log("ikinci fonksiyon");
}
ilkfonksiyon(ikincifonksiyon)

