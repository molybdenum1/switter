const express = require('express');
const mongoose = require('mongoose');
const postRouter = require('./router/postRouter');
require('dotenv').config();

const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use('/main', postRouter)

async function startApp() {
    try {
        await mongoose.connect(process.env.DB_URL)
        app.listen(PORT, () => console.log(`Server is on port ${PORT}`));
    } catch (error) {
        console.log(error);
    }
};
startApp();