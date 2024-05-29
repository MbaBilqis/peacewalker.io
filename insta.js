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

// const clickableText = document.getElementById("peacewalker1");

// clickableText.addEventListener("mouseover", () => {
//   clickableText.classList.toggle("clicked");
// });
// clickableText.addEventListener("mouseout", () => {
//   clickableText.classList.toggle("clicked");
// });
////////////////////////////////////////////

document.querySelector(".igwlkr").addEventListener("mouseover", function () {
  // document.querySelector('.circle3').style.opacity = '0'; // Mengubah opasitas elemen A menjadi 0 saat elemen A di-hover
  document.querySelector(".igwlkr").style.opacity = "1"; // Mengubah opasitas elemen A menjadi 0 saat elemen A di-hover
  /////////////
  document.querySelector(".igwlkr").style.width = "230px"; // Mengubah opasitas elemen A menjadi 0 saat elemen A di-hover
  document.querySelector(".igwlkr").style.height = "230px";
  /////////////
  document.querySelector(".instagramwlkr").style.opacity = "1"; // Mengubah opasitas elemen A menjadi 0 saat elemen A di-hover
  document.querySelector(".instagramwlkr").style.textShadow =
  "0 0 5px #ffffff, 0 0 10px #ffffff, 0 0 15px #ffffff, 0 0 20px #ffffff, 0 0 30px #ffffff, 0 0 40px #ffffff, 0 0 50px #ffffff";
  document.querySelector(".circle").style.boxShadow =
    "0 0 20px 10px rgba(255, 255, 255, 0.7)";
  //   document.querySelector(".circle").style.width.height = "230px"; // Mengubah opasitas elemen A menjadi 0 saat elemen A di-hover
  //   document.querySelector(".circle").style.height = "230px";
  // Mengubah opacity bayangan untuk elemen B agar terlihat bersinar saat elemen A di-hover
  // document.querySelector('.walkinpiece').style.textShadow = '0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #ff0, 0 0 30px #ff0, 0 0 40px #ff0, 0 0 50px #ff0';
});

document.querySelector(".igwlkr").addEventListener("mouseout", function () {
  document.querySelector(".igwlkr").style.opacity = "0.5"; // Mengembalikan opasitas elemen A ke 1 saat mouse meninggalkan elemen A
  document.querySelector(".instagramwlkr").style.opacity = "0"; // Mengembalikan opasitas elemen A ke 1 saat mouse meninggalkan elemen A
  /////////////
  document.querySelector(".igwlkr").style.width = "200px"; // Mengubah opasitas elemen A menjadi 0 saat elemen A di-hover
  document.querySelector(".igwlkr").style.height = "200px";
  /////////////
  // document.querySelector('.circle3').style.opacity = '0'; // Mengembalikan opasitas elemen A ke 1 saat mouse meninggalkan elemen A
  // document.querySelector('.igwlkr').style.boxShadow = '0 0 20px 10px rgba(255, 255, 255, 0)'; // Mengembalikan opacity bayangan untuk elemen B ke 0 saat mouse meninggalkan elemen A
});
