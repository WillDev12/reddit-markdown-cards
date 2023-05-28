const express = require("express");
const router = express.Router();

router.route('/')
    .get(nameReply)
    .post(nameReply)

function nameReply(req, res) {
    const method = req.method;
    const requestType = method === "GET" ? req.query.first : req.body.first;
    const userInput = method === "GET" ? req.query.last : req.body.last;

    res.send(`${requestType}`);
}

module.exports = router;