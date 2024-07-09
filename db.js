const mongoose = require('mongoose');

// const mongoURL = 'mongodb://localhost:27017/hotels'
const mongoURL = 'mongodb+srv://ingalevedant28:HelloWorld@cluster0.2quge6s.mongodb.net/'

mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;

db.on('connected', () => {
    console.log("Connected");
});

db.on('error', () => {
    console.log("error");
});

db.on('disconnected', () => {
    console.log("disconnected");
})