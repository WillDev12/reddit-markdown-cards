////////////////////////////////////////
//                                    //
//        WillDevv12 was here         //
//   https://willdev12.github.io/     //
//                                    //
////////////////////////////////////////

const express = require("express");
const api = require("./api");
const PORT = process.env.PORT || 8080;
const app = express();

app.get("/", (req, res, next) => {
  res.redirect("https://github.com/WillDev12/reddit-markdown-cards");
});

app.use("/apitest", api2);

app.use("/api", api);

app.listen(PORT, () => {
  console.log("listening on 8080");
});

module.exports = app;