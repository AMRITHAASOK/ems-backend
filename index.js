const express = require('express');
const cors = require('cors');
const employeeRoutes = require('./routes/employeeRoutes');
const db = require('./DB/connectionString');

const app = express();
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

app.use('/', employeeRoutes);

app.listen(3000, () => {
    console.log('EMS server started on port 3000');
});
