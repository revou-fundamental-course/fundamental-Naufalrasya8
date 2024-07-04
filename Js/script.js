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

// Function form
function validateForm() {
    var name = document.getElementById("name").value;
    if (name == "") {
        document.getElementById("nameError").textContent = "Nama harus diisi";
        return false;
    }

    var birthdate = document.getElementById("birthdate").value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var message = document.getElementById("message").value;

    document.getElementById("resultName").textContent = "Nama       : " + name;
    document.getElementById("resultBirthdate").textContent = "Tanggal Lahir: " + birthdate;
    if (gender) {
        document.getElementById("resultGender").textContent = "Jenis Kelamin: " + gender.value;
    }
    document.getElementById("resultMessage").textContent = "Pesan      : " + message;

    document.getElementById("nameError").textContent = "";
    return false;
}
