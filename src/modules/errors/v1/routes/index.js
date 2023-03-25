const express = require("express");

// routes
const v1ErrorsMangeRoutes = require("./manage.routes");

const errorsV1IndexRoutes = express.Router();

errorsV1IndexRoutes.use("/manage", v1ErrorsMangeRoutes);

module.exports = errorsV1IndexRoutes;
