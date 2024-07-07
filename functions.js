// ? ==========================================================
// ?                    FONKSİYONLAR
// ? ==========================================================
//! Fonksiyon tanımlama yöntemleri
// Function Declaration (Fonksiyon Bildirimi):
// Function Expression (Fonksiyon İfadesi):
// Arrow Function (Ok Fonksiyonları):
// Function Constructor (Fonksiyon Oluşturucusu):

// !-----------------------------------------------------------
// ! 1.YÖNTEM  : FUNCTION DECLARATION
// !-----------------------------------------------------------
function yazdir(){
    console.log("Mehaba nasılsınız");
}

console.log("-----Fonksiyonlar-Decleration-----")
yazdir()


function selamla(){
    console.log("Merhaba nasılsınız");
}
selamla()

// Fonksiyon tanımlarken verilen değerlere arguments denir 

function adYazdir(ad,soyad="cwailesi",no="00000"){
    console.log("merhaba",ad,soyad,no);
}

// Fonksiyonlar gönderilirken girilen değere parametre denir

adYazdir("Ali","Güven",45)
let name="Hakan"
adYazdir(name)


// ------------------------------------------------
function degerler(){
    console.log(arguments);


}
degerler(3,334,342,565,562,2534,6342,534,123,66,45,237,43)

function deneme(ad,yas,renkler,kitap){
    console.log(ad);
    console.log(yas);
    console.log(renkler);
    console.log(kitap);
}
deneme("Ali",34,["mavi","pembe","yeşil"])

/* ----- Örnek**--------------- ----- */
// function yasHesapla(isim,tarih){
//     console.log("Benim adım",isim,"ben",2024-tarih,"ındayım")
//     let yas = 2024-tarih
//     return yas
// }


// if (yas>40){
//     return "Yaş 40 danbüyük"
// }
// else{
//     return "Yaş 40dan küçük"
// }


// const yas=yasHesapla("Ali",1990)
// const yasÖmer=yasHesapla("Ömer",1980)
// const yasAyse=yasHesapla("Ayse",1986)

// console.log(yas)
// console.log(yasÖmer)
// console.log(yasAyse);


function daireCevresi(r){
    const pi = Math.PI;
    const cevre = 2 * pi *r;
    return cevre;
}
let result= daireCevresi(21);
console.log(result.toFixed(2));

function dairealan(a){
    const pi =Math.PI
    return pi*a*a
}
const sonuc= dairealan(10)
console.log(sonuc);

