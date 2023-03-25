const express = require("express");

const errorsV1IndexRoutes = require("../v1/routes");

const errorsIndexRoutes = express.Router();

errorsIndexRoutes.use("/v1", errorsV1IndexRoutes);

module.exports = errorsIndexRoutes;
