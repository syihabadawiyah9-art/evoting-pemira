const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

// Menyajikan file statis dari folder public (UI Bilik Suara)
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint tes server
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server E-Voting berjalan dengan baik!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server E-Voting berjalan di port ${PORT}`);
});
