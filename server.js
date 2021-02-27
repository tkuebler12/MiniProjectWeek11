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
app.get('/api/table', (req,res) => res.json(table));
app.get('/api/waitlist', (req,res) => res.json(waitlist));

app.post('/api/table',(req,res) => {
    const newTable = req.body;
    if(table.length<5){
        table.push(newTable);
        res.json(newTable);
    } else {
        waitlist.push(newTable);
        res.json(newTable);
    }

})

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));