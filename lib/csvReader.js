import fs from 'fs';
import searchFor from '../lib/searchFor.js';
import listGenerator from '../lib/listGenerator.js';

fs.readFile('./data/employees.csv', 'utf8', (error, data) => { 
    if (error) console.error(error.message);

    const content = data.toString().split('\n').map(line => line.split(','));
    const query = id;
    const list = listGenerator(content);
    let output = searchFor(query, list);
});
