require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("MongoDB Atlas connected"))
.catch((err) => console.error("Connection error:", err));

