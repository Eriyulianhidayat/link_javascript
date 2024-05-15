
    // JavaScript untuk mengganti teks pada class navbar-brand
    document.addEventListener("DOMContentLoaded", function() {
        const navbarBrand = document.querySelector('.navbar-brand');
        
        // Ganti teks pada navbar-brand
        navbarBrand.textContent = "DESA RANTAU PANJANG";

        // Atau Anda juga bisa menggunakan innerHTML untuk menambahkan HTML jika diperlukan:
        // navbarBrand.innerHTML = "Desa <span class='text-danger'>Baru</span>";
    });
