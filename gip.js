function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Contoh validasi sederhana di sisi client
    if (username === 'user' && password === 'password') {
        alert('Login berhasil!');
        window.location.href = 'halaman_baru.html'; // Ganti dengan nama file halaman baru
    } else {
        alert('Login gagal. Periksa kembali username dan password.');
    }
}