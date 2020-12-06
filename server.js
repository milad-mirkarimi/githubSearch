const express = require('express');
const path = require('path')


const app = express();

// Init Middleware
app.use(express.json({ extended: false }));


// Define Routes Here:
app.use('/api/github', require('./routes/api/github'));

if(process.env.NODE_ENV === 'production'){
    app.use(express.static(__dirname + '/public/'))

    app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
