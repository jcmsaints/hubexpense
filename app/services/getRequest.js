const http = require("http");
//req.user

const findAll = function(contentType, query, callbackSucess, callbackError) {
  getService(contentType, query, callbackSucess, callbackError);
};

function getService(contentType, query, callbackSucess, callbackError) {
  http
    .get(`http://localhost:1337/${contentType}`, resp => {
      let first = true;
      let data = "";
      resp.on("data", chunk => {
        data += chunk;
      });
      resp.on("end", () => {
        if (first) {
          callbackSucess(JSON.parse(data));
          first = false;
          console.log(JSON.parse(data));
        }
      });
    })
    .on("error", err => {
      callbackError(err.message);
    });
}
module.exports = { findAll: findAll };
