const cloudinary = require('cloudinary').v2;

// const UploadToStorage = async (file) => {

//     cloudinary.uploader.upload(`data:image/png;base64,${file.data.toString('base64')}`, (error, result) => {
//         if (error) {
//             console.log(error)
//             return `An error occurred while trying to upload the image: ${error}`
//         }
//         return result.secure_url
//     });
// }

function UploadToStorage(file) {
    return new Promise((resolve, reject) => {
        cloudinary.uploader.upload(`data:image/png;base64,${file.data.toString('base64')}`, (err, result) => {
        if (err) return reject(err);
        return resolve(result.secure_url);
      })
    });
  }

module.exports = UploadToStorage