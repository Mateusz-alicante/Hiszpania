console.log("Hello world")
var fs = require('fs');

const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 5000;

const uploadRouter = require('./utils/routers/imageUploadHandler/Router')

app.use(express.static(path.join(__dirname, '/../client/build')));

app.get('/api/test', (req, res) => {
    res.json({message: "Hello World from node"})
    console.log("Test message recieved")
})

app.use('/api/imageUpload', uploadRouter)


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/../client/build/index.html'));
  });


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

