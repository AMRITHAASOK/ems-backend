const express = require('express');
const router = express.Router();
const controller = require('../controllers/employeeController');

router.get('/getEmployees', controller.allEmployees);
router.post('/addEmployee', controller.addEmployee);
router.delete('/deleteEmployee/:id', controller.deleteEmployee);
router.get('/getEmployee/:id', controller.fetchEmployee);
router.post('/updateEmployee', controller.updateEmployee);

module.exports = router;
