const http = require("http");
//req.user

const create = function(contentType, data, callbackSucess, callbackError) {
  postService(contentType, data, callbackSucess, callbackError);
};

function postService(contentType, data, callbackSucess, callbackError) {
  const options = {
    hostname: "localhost",
    port: 1337,
    path: `/${contentType}`,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Content-Length": data.length
    }
  };

  const req = http.request(options, res => {
    console.log(`statusCode: ${res.statusCode}`);

    res.on("data", d => {
      process.stdout.write(d);
    });
  });

  req.on("error", error => {
    console.error(error);
  });

  req.write(data);
  req.end();
}
module.exports = { create: create };
