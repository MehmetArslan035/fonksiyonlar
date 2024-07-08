//? ====================================================
// ?              FONKSİYONLAR - IIFE
// ? ====================================================

//**Immediately Invoked Function Expression (IIFE) yani "Hemen Çağrılan Fonksiyon İfadesi" */
(function(){
    console.log("Merhaba")
})();



(function(a,b){
    let toplam=a+b
    console.log(toplam)
}
)(45,63);

(function (x,y){
    console.log(Math.pow(x,y));
}
)(2,4)