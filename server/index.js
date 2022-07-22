const express = require('express');
const mongoose = require('mongoose');
const postRouter = require('./router/postRouter');
const cors = require('./middleware/cors.middleware');
const authRouter = require('./router/authRouter');
require('dotenv').config();

const PORT = process.env.PORT;
const app = express();

app.use(cors);
app.use(express.json());
app.use('/main', postRouter);
app.use('/auth', authRouter);

async function startApp() {
    try {
        await mongoose.connect(process.env.DB_URL)
        app.listen(PORT, () => console.log(`Server is on port ${PORT}`));
    } catch (error) {
        console.log(error);
    }
};
startApp();