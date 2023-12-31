require('dotenv').config()
const express = require('express')
const ProductRouter = require('./routes/product');
const UserRouter = require('./routes/user');
const cors = require('cors');
const server = express();
// to resolve path issue
const path = require('path');


// Database DAta

const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Successfully connected to database");
    } catch (err) {
        console.error(err);
    }
}

// console.log("ENV Password :",process.env.DB_PASSWORD);
server.use(cors())   //allow to run & pass data (react ,node) server by different port
server.use(express.json())
server.use('/products', ProductRouter.router)
server.use('/users', UserRouter.router)
server.use(express.static( path.resolve(__dirname ,process.env.PUBLIC_DIR)))
server.use('*', (req, res) => {
    res.sendFile( path.resolve(__dirname  ,"build","index.html"))
})
server.listen(3000,"0.0.0.0", () => {
    console.log("Server started ...")
})