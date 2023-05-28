const express = require("express");
const router = express.Router();

router.route('/')
    .get(nameReply)
    .post(nameReply)

function nameReply(req, res) {
    const method = req.method;
    const requestType = method === "GET" ? req.query.type : req.body.type;
    const nameValue = method === "GET" ? req.query.name : req.body.name;

    if (requestType === "card") {
        res.send("card");
    } else {
        res.send("not card");
    }
}

function getInfo(username) {
    fetch(url)
    .then((rep) => rep.json())
    .then((data) => {
      var d = data.data;
      let jsonOutput = '{ "data" : [' +
        `{ "snooAvatar":"${d.snoovatar_img} } ]}"`;
    });
}

module.exports = router;