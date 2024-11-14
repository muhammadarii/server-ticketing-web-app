const express = require("express");
const router = express();
const { create, index, find, update, destroy } = require("./controller");

router.get("/events", index);
router.get("/events/:id", find);
router.put("/events/:id", update);
router.post("/events", create);
router.delete("/events/:id", destroy);

module.exports = router;
