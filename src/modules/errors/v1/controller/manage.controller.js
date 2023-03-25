exports.getAllErrorsList = (req, res, next) => {
  try {
    return res.json({
      data: [],
      message: "list fetched successfully",
      status: "success",
    });
  } catch (error) {
    return res.status(500).json({
      data: null,
      message: "SOMETHING WENT WRONG",
      status: "error",
      error,
    });
  }
};
