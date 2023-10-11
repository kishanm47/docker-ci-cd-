const express = require("express");
const app = express();

app.get("/", (request, response) => {
  return response.send({ message: "hello from node" });
});

app.listen(3002, () => {
  console.log("---> app is listening on port ::: 3002");
});
