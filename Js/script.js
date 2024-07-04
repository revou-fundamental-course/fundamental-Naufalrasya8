/* Ini Javascript */

// Function nama
const namaSpan = document.querySelector('.nama');
const namaPengguna = prompt('Hallo Selamat Datang, Silahkan masukkan nama kamu : ');
namaSpan.textContent = namaPengguna;

// Function Slide
let slideIndex = 0;
const slides = document.getElementsByClassName("slide");

function showSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }    
  slides[slideIndex - 1].style.display = "block";  
  setTimeout(showSlides, 2000); 
}

showSlides(); 
