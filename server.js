const express = require('express');
const path = require('path')
const history = require('connect-history-api-fallback');

const app = express();
app.use(history());
app.use(express.static('src'));
// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => {
    res.sendFile('src/index.html');
});

// Define Routes Here:
app.use('/api/github', require('./routes/api/github'));

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/dist'))

    app.get('*', (req, res)=> {
        res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'));
    })
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
