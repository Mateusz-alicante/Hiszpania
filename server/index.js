console.log("Hello world")
var fs = require('fs');

const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 5000;

const uploadRouter = require('./utils/routers/imageUploadHandler/Router')
const contentRouter = require('./utils/routers/contentDB/Router.js')
const authRouter = require('./utils/routers/auth/Router')

// DB connection
require('./utils/DB/MongooseInit')

app.set('trust proxy', 1);

app.use(express.static(path.join(__dirname, '/../client/build')));

app.use('/api/content', contentRouter)
app.use('/api/imageUpload', uploadRouter)
app.use('/api/auth', authRouter)


app.get('/api/test', () => console.log("Test request recieved"))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/../client/build/index.html'));
});


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

