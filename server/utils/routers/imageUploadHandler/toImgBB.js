const ApiKey = 'Your_key'

const axios = require('axios').default
const FormData = require('form-data');
const ApiClient = require('imgbb').ImgBB;


const toImgBB = async (image) => {
    console.log(ApiClient)
    let api = new ApiClient({
        token: ApiKey,
       });
       
    let ret = await api.upload({
         /**
          * A binary file, base64 data, or a URL for an image. (up to 16MB)
          */
        image: image,
    })
    .catch(e => console.log(e))
    
    console.log(ret)
}

module.exports = toImgBB