// Menunggu seluruh dokumen HTML dimuat sebelum menjalankan fungsi apa pun
document.addEventListener('DOMContentLoaded', () => {

    // --- Bagian 0: Fungsi dan Pemanggilan Welcome Message ---

    // Fungsi untuk menampilkan pesan selamat datang
    function welcomeMessage() {
        let username = prompt("Masukkan nama Anda:");
        const usernameElement = document.getElementById("username");
        
        if (username) {
            // Jika nama dimasukkan, tampilkan di elemen span
            usernameElement.textContent = username;
        } else {
            // Jika tidak ada nama, gunakan 'Guest' sebagai default
            usernameElement.textContent = 'Guest'; 
            alert("Selamat datang di website JALADI!");
        }
    }

    // DIPINDAHKAN: Panggil fungsi welcomeMessage setelah dokumen siap
    welcomeMessage();


    // --- Bagian 1: Jam Real-time ---
    const currentTimeElement = document.getElementById('currentTime');

    function updateTime() {
        const now = new Date();
        // Menggunakan format waktu Indonesia agar lebih relevan
        currentTimeElement.textContent = now.toLocaleString('id-ID', {
             dateStyle: 'full', 
             timeStyle: 'long' 
        });
    }
    updateTime();
    setInterval(updateTime, 1000);


    // --- Bagian 2: Logika Pengiriman Formulir ---
    const messageForm = document.getElementById('messageForm');
    
    // Elemen output
    const outputName = document.getElementById('outputName');
    const outputEmail = document.getElementById('outputEmail');
    const outputGender = document.getElementById('outputGender');
    const outputMessage = document.getElementById('outputMessage');

    messageForm.addEventListener('submit', (event) => {
        // Mencegah halaman reload saat form disubmit
        event.preventDefault();

        // Mengambil nilai dari input
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const gender = document.querySelector('input[name="gender"]:checked');
        const message = document.getElementById('message').value;

        // DIPERBAIKI: Logika validasi
        if (!name || !email || !gender || !message) {
            alert('Harap isi semua kolom yang wajib diisi!');
            return; // Hentikan fungsi jika ada kolom yang kosong
        }
        
        // Menampilkan pesan sukses
        alert(`Terima kasih, ${name}! Formulir Anda berhasil dikirim.`);
        
        // Memperbarui kotak output
        outputName.textContent = name;
        outputEmail.textContent = email;
        // DIPERBAIKI: Pengecekan untuk gender agar tidak error
        outputGender.textContent = gender ? gender.value : '-';
        outputMessage.textContent = message;

        // Log ke konsol untuk debugging
        console.log({
            Nama: name,
            Email: email,
            Gender: gender ? gender.value : 'Tidak dipilih',
            Pesan: message
        });

        // Reset formulir setelah berhasil
        messageForm.reset();
    });
});