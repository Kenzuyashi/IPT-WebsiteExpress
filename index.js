const express = require("express");


const app = express();
const PORT = process.env.PORT || 8000;


app.use(express.static(__dirname + '/public'));

app.get('/', async (req, res) => {
    await res.sendFile(__dirname + '/public/index.html');
} )


app.get('/about', async (req, res) => {
    await res.sendFile(__dirname + '/public/about.html');
} )

app.get('/contact', async (req, res) => {
    await res.sendFile(__dirname + '/public/contact.html');
} )

app.get('/services', async (req, res) => {
    await res.sendFile(__dirname + '/public/services.html');
} )



app.listen(PORT);
console.log(`Server listening on port ${PORT}`)