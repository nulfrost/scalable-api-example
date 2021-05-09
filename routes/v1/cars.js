const router = require("express").Router();

router.get("/", (req, res) => {
  res.status(200).json({
    data: {
      message: "This is the get all cars route!",
    },
  });
});

module.exports = router;
