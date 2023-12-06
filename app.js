const express = require('express');
const path = require('path');

const app = express();
require('dotenv').config();
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs'); // Set EJS as the view engine
app.set('views', path.join(__dirname, 'views')); // Specify the directory for your EJS files



const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

app.get('/', (req, res) => {
    try{
        res.render('home');  //to home.ejs
    }
    catch(error){
        console.log(error);
        res.status(500).send('Server error');
    }
});