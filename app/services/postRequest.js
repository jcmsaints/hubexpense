const axios = require("axios");

function postService(contentType, data, callbackSucess, callbackError) {
  axios
    .post(`http://localhost:1337/${contentType}`, data)
    .then(res => {
      console.log(`statusCode: ${res.statusCode}`);
      callbackSucess(res);
    })
    .catch(error => {
      callbackError(error);
    });
}
module.exports = { postService: postService };
