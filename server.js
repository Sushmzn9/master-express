import { MongoConfig } from "./Mongoconnect/MongoConfig.js";
import express from "express";
import path from "path";
const app = express();
const PORT = process.env.PORT || 8000;
const __dir = path.resolve();
import bodyParser from "body-parser";
app.use(bodyParser.urlencoded({ extended: false }));

MongoConfig();

app.post("/api/v1/userdata", (req, res) => {
  res.json({
    status: "success",
    message: "server is running healthy",
  });
});
app.get("/", (req, res) => {
  res.send("This is about");
});

// app.post("/api/v1/login", (req, res) => {
//   //   const userData = req.body.name;
//   res.send("done");
//   console.log(req.body);
// });

//CURD Operation GET POST PUT DElete

app.listen(PORT, (error) => {
  error
    ? console.log("error")
    : console.log(
        `your server is healthy and running at http://localhost:${PORT}`
      );
});
