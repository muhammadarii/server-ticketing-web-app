const express = require("express");
const router = express();
const { create, index, find, update, destroy } = require("./controller");

router.get("/talents", index);
router.get("/talents/:id", find);
router.put("/talents/:id", update);
router.post("/talents", create);
router.delete("/talents/:id", destroy);

module.exports = router;
