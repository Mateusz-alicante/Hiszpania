console.log("Hello world")

const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 5000;

app.get('/api/test', (req, res) => {
    res.json({message: "Hello World from node"})
})


if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname+'/../client/public')));
    const path = require('path');
    app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/../client/build/index.html'));
    });
}


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

