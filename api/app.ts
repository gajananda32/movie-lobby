const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const  movieRoutes = require('./route/movie');


dotenv.config();

const app = express();
const PORT = 3000 || process.env.PORT;

app.use(express.json());
app.use('/api', movieRoutes);

mongoose
    .connect(process.env.MONGODB_URI {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
    .then(() => {
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch(error => console.log(error));
