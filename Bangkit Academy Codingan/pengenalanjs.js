function greeting(greet){
    console.log("selamat"  +  greet  + "!")
}
greeting(" malam")
greeting(" siang")

const score=83;

if (score>89){
    console.log("anda mendapatkan pringkat A");
}else if (score>79){
    console.log("anda mendapatkan pringkat B");
}else if (score>69){
    console.log("anda mendapatkan pringkat C");
} else {
    console.log("anda mendapatkan peringkat D");
}

let totalbelanja=125000;
let member="Bronze";

if (totalbelanja>100000 && member=="Silver"){
    console.log("SELAMAT ANDA MENDAPATKAN DISKON 10%")
} else {
    console.log("anda belum mendapatkan diskon")
}

let jumlahbelanja=125000;
let jenismember="Bronze";

if (jumlahbelanja>100000 || jenismember=="Silver"){
    console.log("SELAMAT ANDA MENDAPATKAN DISKON 10%")
} else {
    console.log("anda belum mendapatkan diskon")
}

for (let i=0;i<5;i++){
    console.log("hello world");
}
console.log("SUDAH DILUAR KONDISI");

let counter=0;
while (counter<5)
{
    console.log("hello world");
    counter++;
}
console.log("SUDAH DILUAR KONDISI");