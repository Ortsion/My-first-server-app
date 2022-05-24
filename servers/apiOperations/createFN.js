const fs = require('fs');
const { Module } = require('module');
const path = require('path');
const dataPath = path.join(__dirname + '/../data/students.json')


const createFN = () => {
    const students = JSON.parse(fs.readFileSync(dataPath , "utf-8"));
    return students;
}

module.exports = createFN;