const Article = require('../../Schemas/Articles')

const loadArticles = async (req, res) => {
    // const articles = await Article.find({})
    // .limit(10)
    // .select("-body -__v")
    
    // res.send(articles)

    res.send([
        {"_id":{"$oid":"5eedef2bac74896180a012dd"},"imageDescription":"image description","tags":[],"createdAt":{"$date":{"$numberLong":"1592651412280"}},"title":"test","subtitle":"test","body":"<figure class=\"image\"><img src=\"https://testckeditorupload.s3.eu-west-1.amazonaws.com/d2b08a453116985f7e091d335b6a8652\"></figure><p>Another test article</p>","image":"https://testckeditorupload.s3.amazonaws.com/d2b08a453116985f7e091d335b6a8652","author":"TestAuthor","__v":{"$numberInt":"0"}},
        {"_id":{"$oid":"5eedef2bac74896180a012dd"},"imageDescription":"image description","tags":[],"createdAt":{"$date":{"$numberLong":"1592651412280"}},"title":"test","subtitle":"test","body":"<figure class=\"image\"><img src=\"https://testckeditorupload.s3.eu-west-1.amazonaws.com/d2b08a453116985f7e091d335b6a8652\"></figure><p>Another test article</p>","image":"https://testckeditorupload.s3.amazonaws.com/d2b08a453116985f7e091d335b6a8652","author":"TestAuthor","__v":{"$numberInt":"0"}},
        {"_id":{"$oid":"5eedef2bac74896180a012dd"},"imageDescription":"image description","tags":[],"createdAt":{"$date":{"$numberLong":"1592651412280"}},"title":"test","subtitle":"test","body":"<figure class=\"image\"><img src=\"https://testckeditorupload.s3.eu-west-1.amazonaws.com/d2b08a453116985f7e091d335b6a8652\"></figure><p>Another test article</p>","image":"https://testckeditorupload.s3.amazonaws.com/d2b08a453116985f7e091d335b6a8652","author":"TestAuthor","__v":{"$numberInt":"0"}},
        {"_id":{"$oid":"5eedef2bac74896180a012dd"},"imageDescription":"image description","tags":[],"createdAt":{"$date":{"$numberLong":"1592651412280"}},"title":"test","subtitle":"test","body":"<figure class=\"image\"><img src=\"https://testckeditorupload.s3.eu-west-1.amazonaws.com/d2b08a453116985f7e091d335b6a8652\"></figure><p>Another test article</p>","image":"https://testckeditorupload.s3.amazonaws.com/d2b08a453116985f7e091d335b6a8652","author":"TestAuthor","__v":{"$numberInt":"0"}},
        {"_id":{"$oid":"5eedef2bac74896180a012dd"},"imageDescription":"image description","tags":[],"createdAt":{"$date":{"$numberLong":"1592651412280"}},"title":"test","subtitle":"test","body":"<figure class=\"image\"><img src=\"https://testckeditorupload.s3.eu-west-1.amazonaws.com/d2b08a453116985f7e091d335b6a8652\"></figure><p>Another test article</p>","image":"https://testckeditorupload.s3.amazonaws.com/d2b08a453116985f7e091d335b6a8652","author":"TestAuthor","__v":{"$numberInt":"0"}}
    ])
}

module.exports = loadArticles