const express = require("express");
const path = require('path');


const app = express();
const port = 8080;

app.use(express.static("frontend"));

app.get('/', (req, res) => {
    return res.sendFile(__dirname + '/frontend/index.html')
})

app.get('/index', (req, res) => {
    return res.sendFile(__dirname + '/frontend/index.html')
})

app.get('/jquery', (req, res) => {
    return res.sendFile(__dirname + '/frontend/jquery.html')
})

app.get('/javascript', (req, res) => {
    return res.sendFile(__dirname + '/frontend/javascript.html')
})

app.get('/backend', (req, res) => {
   return  res.sendFile(__dirname + '/frontend/backend.html')
})

app.get('/frontend', (req, res) => {
   return res.sendFile (__dirname + '/frontend/frontend.html')
})

app.get('/api',(req, res) => {
    return res.sendFile(__dirname + '/frontend/api.html')
})

app.get('/database', (req, res) => {
    return res.sendFile(__dirname + '/frontend/database.html')
})

app.listen(port, () => {
    console.log("Server is running on port: ", port)
});