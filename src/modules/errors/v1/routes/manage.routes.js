const express = require("express");

// helpers
const { find } = require("../../../../helpers/v1/reusableValidations");

// middleware
const Validation = require("../../../../middleware/v1/validation.middleware");

// controller
const { errorsV1manageController } = require("../controller");

const v1ErrorsMangeRoutes = express.Router();

v1ErrorsMangeRoutes.get(
  "/",
  new Validation(find).validate,
  errorsV1manageController.getAllErrorsList
);

module.exports = v1ErrorsMangeRoutes;
