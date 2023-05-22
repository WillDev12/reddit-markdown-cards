const express = require("express");
const router = express.Router();

router.route('/')
    .get(nameReply)
    .post(nameReply)

function nameReply(req, res) {
    const method = req.method;
    const firstName = method === "GET" ? req.query.first : req.body.first;
    const lastname = method === "GET" ? req.query.last : req.body.last;

    res.format({
        "text/plain": () => {
            res.send(`name: ${firstName} ${lastname}`)
        },

        "text/html": () => {
            let html = '<ul>';
            html += `<li>name: ${firstName} ${lastname}`;
            html += `</ul>`;
            res.send(html);
        },

        "application/json": () => {
            res.json({ 'name': `${firstName} ${lastname}` });
        },

        "default": () => {
            res.status(406).send('Not Acceptable');
        }

    });

}

module.exports = router;