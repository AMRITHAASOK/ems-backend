const Employee = require('../models/employeeModel');

// Get all employees
const allEmployees = async (req, res) => {
    try {
        const employees = await Employee.find();
        res.status(200).json({ statusCode: 200, employees });
    } catch (err) {
        res.status(500).json({ statusCode: 500, message: "Server error" });
    }
};

// Add new employee
const addEmployee = async (req, res) => {
    const { id, empname, age, title, position, salary } = req.body;

    const existing = await Employee.findOne({ id });
    if (existing) {
        return res.status(401).json({ statusCode: 401, message: "Employee already exists" });
    }

    const newEmployee = new Employee({ id, empname, age, title, position, salary });
    await newEmployee.save();
    res.status(200).json({ statusCode: 200, message: "Employee added successfully" });
};

const deleteEmployee = async (req, res) => {
    try {
        const result = await Employee.deleteOne({ id: req.params.id });

        if (result.deletedCount === 0) {
            return res.status(404).json({ statusCode: 404, message: "Employee not found" });
        }

        res.status(200).json({ statusCode: 200, message: "Employee deleted successfully" });
    } catch (error) {
        console.error("Error deleting employee:", error);
        res.status(500).json({ statusCode: 500, message: "Internal Server Error" });
    }
};


// Fetch one employee
const fetchEmployee = async (req, res) => {
    const employee = await Employee.findOne({ id: req.params.id });
    res.status(200).json({ statusCode: 200, employee });
};

// Update employee
const updateEmployee = async (req, res) => {
    const { id, empname, age, title, position, salary } = req.body;

    const employee = await Employee.findOne({ id });
    if (!employee) {
        return res.status(401).json({ statusCode: 401, message: "No Data found" });
    }

    employee.empname = empname;
    employee.age = age;
    employee.title = title;
    employee.position = position;
    employee.salary = salary;

    await employee.save();

    res.status(200).json({ statusCode: 200, message: "Employee data updated successfully" });
};

module.exports = {
    allEmployees,
    addEmployee,
    deleteEmployee,
    fetchEmployee,
    updateEmployee
};
