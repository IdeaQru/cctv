const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Menyajikan file HTML statis dari folder 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Routing untuk halaman utama
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Routing untuk arah Utara
app.get('/cctv/31', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'cctv31.html'));
});

// Routing untuk arah Selatan
app.get('/cctv/21', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'cctv21.html'));
});

// Routing untuk arah Timur
app.get('/cctv/11', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'cctv11.html'));
});

// Routing untuk arah Barat
app.get('/cctv/1', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'cctv1.html'));
});

// Routing untuk arah Tengah


// Menjalankan server
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
