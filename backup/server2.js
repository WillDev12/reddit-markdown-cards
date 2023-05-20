const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.options("*", (req, res, next) => {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Authorization, Content-Length, X-Requested-Width');
    res.send(200);
});

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next()
})

app.use(express.static("css"));

const profileCard = require("./cards/profile");
const snooCard = require("./cards/snoo");
const subCard = require("./cards/sub");
const userCard = require("./cards/user");

app.use("/profile", profileCard);
app.use("/snoo", snooCard);
app.use("/sub", subCard);
app.use("/user", userCard);

// code here /////////////////////////////////////////////////

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/src/index.html");
});

app.all('*', (req, res) => {
    res.send("Invalid route.");
});

// code here /////////////////////////////////////////////////

app.listen(PORT, () => console.log(`listening on ${PORT}`));