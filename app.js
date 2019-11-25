const express = require('express');
const fs = require('fs');

const app = express();

const port = 8000;

app.get('/', (req, res) => res.send('Outline India Project'));

app.get('/employees', (req, res) => {
    let rawdata = fs.readFileSync('employees.json');
    let employees = {'employees' : JSON.parse(rawdata)};
    res.send(employees)
});

app.post('/employees', (req, res) => {
    let employees = {'employees' : []};
    res.send(employees)
});

app.get('/surveys', (req, res) => {
    let rawdata = fs.readFileSync('surveys.json');
    let surveys = {'surveys' : JSON.parse(rawdata)};
    res.send(surveys)
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
