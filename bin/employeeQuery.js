import express from 'express';
import fs from 'fs';
import searchFor from '../lib/searchFor.js';
import listGenerator from '../lib/listGenerator.js';

const PORT = 3050;
const HOST = '0.0.0.0';
let list = undefined;

fs.readFile('./data/employees.csv', 'utf8', (error, data) => { 
    if (error) console.error(error.message);

    const content = data.toString().split('\n').map(line => line.split(','));
    list = listGenerator(content);
});


const app = express();

app.get('/', (request, response) => {
    response.send(`
    <h1>Welcome to the "employee CSV express" example</h1>
    <p>
        To query the employees list, please follow the next instructions:<br>
        <br>
        1.- Append to <b>localhost:3000</b> a <b>/employee/</b> and your <b>query></b><br>
        2.- Queries available:<br>
    </p>
    <p>
        a) <b>"all"</b>: shows all employees list.<br>
        b) Choose a number between <b>1-10</b> to show that specific employee information.<br>
    </p>
    <h2>Example</h2>
    <p>
        localhost:3000<b>/employee/all</b>
    </p>
    <p>
        localhost:3000<b>/employee/1</b>
    </p>
    `)
})

app.get('/employee/:id', (request, response) => {
    const query = request.params.id

    response.send(searchFor(query, list));
})

app.listen(PORT, HOST);

console.log(`Running on http://${HOST}:${PORT}`);
