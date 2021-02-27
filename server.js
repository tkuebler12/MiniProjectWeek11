const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

const table = [];
const waitlist = [];

app.get('/', (req,res) => res.sendFile(path.join(__dirname, 'home.html')));
app.get('/table', (req,res) => res.sendFile(path.join(__dirname, 'table.html')));
app.get('/reserve', (req,res) => res.sendFile(path.join(__dirname, 'reserve.html')));

app.post('/table',(req,res) => {
    const newTable = req.body;

    table.push(newTable);
    res.json(newTable);
})

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));