const express = require('express');
const app = express();
const db = require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json()); //req.body




app.get("/", (req, res) =>{
    res.send('Welocome to my hotel.... Now i will help you ?, we have list of menus')
});

const personRoutes = require('./routes/personRoutes');
app.use('/person', personRoutes);

const menuRoutes = require('./routes/menuRoutes');
app.use('/menu', menuRoutes)



app.listen(3000, function(){
    console.log("Listening on port 3000");
});
