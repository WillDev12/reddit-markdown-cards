const express = require("express");
const api = require("./name");
const PORT = process.env.PORT || 8080;
const app = express();

app.get('/yes', (req, res, next) => {
    res.redirect('https://github.com/WillDev12');
});

app.use('/api', api);

app.listen(PORT, () => {console.log('listening on 8080')});