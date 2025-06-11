const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    id: Number,
    empname: String,
    age: Number,
    title: String,
    position: String,
    salary: Number
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
