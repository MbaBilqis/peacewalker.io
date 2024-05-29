const text = document.getElementById("peacewalker1");
let isHovered = false;
let intervalId; // Variable untuk menyimpan ID interval

text.addEventListener("mouseover", function () {
  if (!isHovered) {
    isHovered = true;
    intervalId = setInterval(changeColor, 300); // Mengubah warna setiap detik
  }
});

text.addEventListener("mouseout", function () {
  clearInterval(intervalId); // Menghentikan interval saat mouse tidak lagi dihover
  isHovered = false;
  text.style.color = ""; // Mengatur kembali warna teks ke warna semula
});
function changeColor() {
  text.style.color = getRandomColor();
}
function getRandomColor() {
  const colors = ["red", "blue", "purple"]; // Daftar warna yang diinginkan
  return colors[Math.floor(Math.random() * colors.length)];
}

// const clickableText = document.getElementById("circleAbout2");

// clickableText.addEventListener("click", () => {
//   clickableText.classList.toggle("clicked");
// });
// clickableText.addEventListener("click", () => {
//   clickableText.classList.toggle("clicked");
// });
///////////////////////////////
// document.querySelector(".circleAbout2").addEventListener("click", function () {
//   document.querySelector(".circleAbout2").style.width = "230px"; // Mengubah opasitas elemen A menjadi 0 saat elemen A di-hover
//   document.querySelector(".circleAbout2").style.height = "230px"; // Mengubah opasitas elemen A menjadi 0 saat elemen A di-hover
//   document.querySelector(".circleAbout2").style.opacity = "1"; // Mengembalikan opasitas elemen A ke 1 saat mouse meninggalkan elemen A
//   document.querySelector(".walkinpiece").style.opacity = "1"; // Mengubah opasitas elemen A menjadi 0 saat elemen A di-hover
//   document.querySelector(".circleAbout2").style.boxShadow =
//     document.querySelector(".walkinpiece").style.textShadow =
//       "0 0 5px #ffd700, 0 0 10px #ffd700, 0 0 15px #ffd700, 0 0 20px #ffd700, 0 0 30px #ffd700, 0 0 40px #ffd700, 0 0 50px #ffd700";
//   /////////////
//   // "0 0 "20px" 10px rgba(255, 255, 255, 0.7)"; // Mengubah opacity bayangan untuk elemen B agar terlihat bersinar saat elemen A di-hover
//   // document.querySelector(".circleAbout2").style.opacity = "0"; // Mengubah opasitas elemen A menjadi 0 saat elemen A di-hover
//   /////////////
//   // document.querySelector(".circleAbout1").style.width = "230px"; // Mengubah opasitas elemen A menjadi 0 saat elemen A di-hover
//   // document.querySelector(".circleAbout1").style.height = "230px"; // Mengubah opasitas elemen A menjadi 0 saat elemen A di-hover
//   // document.querySelector('.walkinpiece').style.textShadow = '0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #ff0, 0 0 30px #ff0, 0 0 40px #ff0, 0 0 50px #ff0';
// });

// const clicklagi = document.getElementById("id_circleAbout2");
// clicklagi.addEventListener("click", () => {
//   clicklagi.classList.toggle("clicked");
// });

// document
//   .querySelector(".circleAbout2")
//   .addEventListener("mouseout", function () {
//     document.querySelector(".circleAbout2").style.opacity = "0.5"; // Mengembalikan opasitas elemen A ke 1 saat mouse meninggalkan elemen A
//     document.querySelector(".circleAbout2").style.width = "130px"; // Mengubah opasitas elemen A menjadi 0 saat elemen A di-hover
//     document.querySelector(".circleAbout2").style.height = "50px";
//     document.querySelector(".walkinpiece").style.opacity = "0"; // Mengembalikan opasitas elemen A ke 1 saat mouse meninggalkan elemen A
//     document.querySelector(".circleAbout2").style.boxShadow =
//       "0 0 20px 10px rgba(255, 255, 255, 0)"; // Mengembalikan opacity bayangan untuk elemen B ke 0 saat mouse meninggalkan elemen A
//     /////////////
//     // document.querySelector(".circleAbout1").style.width = "200px"; // Mengubah opasitas elemen A menjadi 0 saat elemen A di-hover
//     // document.querySelector(".circleAbout1").style.height = "200px";
//     /////////////
//   });

/////////////////////////////////////////// ig peace walker
// document.querySelector('.igwlkr').addEventListener('mouseover', function() {
//   // document.querySelector('.igwlkr').style.opacity = '0'; // Mengubah opasitas elemen A menjadi 0 saat elemen A di-hover
//   document.querySelector('.instagramwlkr').style.opacity = '1'; // Mengubah opasitas elemen A menjadi 0 saat elemen A di-hover
//   document.querySelector('.igwlkr').style.boxShadow = '0 0 20px 10px rgba(255, 255, 255, 0.7)'; // Mengubah opacity bayangan untuk elemen B agar terlihat bersinar saat elemen A di-hover
//   document.querySelector('.instagramwlkr').style.textShadow = '0 0 5px #ffd700, 0 0 10px #ffd700, 0 0 15px #ffd700, 0 0 20px #ffd700, 0 0 30px #ffd700, 0 0 40px #ffd700, 0 0 50px #ffd700';
//   // document.querySelector('.walkinpiece').style.textShadow = '0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #ff0, 0 0 30px #ff0, 0 0 40px #ff0, 0 0 50px #ff0';
// });

// document.querySelector('.igwlkr').addEventListener('mouseout', function() {
//   document.querySelector('.igwlkr').style.opacity = '0.5'; // Mengembalikan opasitas elemen A ke 1 saat mouse meninggalkan elemen A
//   document.querySelector('.instagramwlkr').style.opacity = '0'; // Mengembalikan opasitas elemen A ke 1 saat mouse meninggalkan elemen A
//   // document.querySelector('.circle').style.boxShadow = '0 0 20px 10px rgba(255, 255, 255, 0)'; // Mengembalikan opacity bayangan untuk elemen B ke 0 saat mouse meninggalkan elemen A
// });
