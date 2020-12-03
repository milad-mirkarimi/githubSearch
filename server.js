const express = require('express');

const app = express();

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API RUNNING!'));

// Define Routes Here:
app.use('/api/github', require('./routes/api/github'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
