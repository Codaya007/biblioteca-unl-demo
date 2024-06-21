const express = require("express");
const authRouter = require("./auth");
const bookRouter = require("./books");
const router = express.Router();

router.use("/auth", authRouter);
router.use("/books", bookRouter);

module.exports = router;
