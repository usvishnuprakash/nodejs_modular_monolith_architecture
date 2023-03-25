const express = require("express");

const errorsIndexRoutes = require("./src/modules/errors/index/indexRoutes");

const app = express();

app.use("/errors", errorsIndexRoutes);

const port = 3000;
app.listen(port, (error, response) => {
  if (error) {
    console.log("app is crashing", error);
  } else {
    console.log(`app is started successfully in ${port} `);
  }
});
