const fs = require('fs');
const path = require('path');
const datapath = path.join(__dirname + '/../data/students.json')

const updateFN = () => {
   const students = JSON.parse( fs.readFileSync(datapath, "utf-8"));
   return students;
}

module.exports = updateFN;