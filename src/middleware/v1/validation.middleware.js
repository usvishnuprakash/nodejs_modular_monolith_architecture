const Ajv = require("ajv");
const ajv = new Ajv(); // options can be passed, e.g. {allErrors: true}

function Validation(schema) {
  this.schema = ajv.compile(schema);

  // FUNCTION
  this.validate = (req, res, next) => {
    try {
      const data = { ...req.query, ...req.params, ...req.body };
      const valid = this.schema(data);
      if (!valid) {
        return res.status(422).json({
          data: valid,
          message: "",
          success: false,
        });
      }
      return next();
    } catch (error) {
      console.log("error from v1 validation", error);
      return res.status(500).json({
        data: null,
        success: false,
        message: "SOMETHING WENT WRONG IN PARAMETER VALIDATION FUNCTION",
      });
    }
  };
}

module.exports = Validation;
