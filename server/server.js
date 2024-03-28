import express from "express";
import fs from "fs";
import path from "path";
import cors from "cors";
import mailer from "./mailer/mailer.js";
import dotenv from "dotenv";

import React from "react";
import ReactDOMServer from "react-dom/server";

import App from "../src/App";
import projects from './data/projectsData.js'

const app = express();
const router = express.Router();

dotenv.config();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`App launched on ${port}`);
});

app.use("/", router);

app.use("^/$", (req, res, next) => {
  fs.readFile(path.resolve("./build/index.html"), "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Some error happened");
    }
    return res.send(
      data.replace(
        '<div id="root"></div>',
        `<div id="root">${ReactDOMServer.renderToString(<App />)}</div>`
      )
    );
  });
});

app.use(express.static(path.resolve(__dirname, "..", "build")));

router.post("/contact", (req, res) => {
  const response = mailer(...req.body);
  res.status(response.code).json(response.status);
});

router.get("/projects", (req, res) => {
  try {
    res.status(200).json(projects);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});
app.get("/yui.css", function (req, res) {
  const filePath = path.join(__dirname, "..", "src", "yui", "yui.css");
  fs.readFile(filePath, "utf8", function (err, data) {
    if (err) {
      console.error("Error reading CSS file:", err);
      res.status(500).send("Internal Server Error");
      return;
    }
    res.setHeader("Content-Type", "text/css");
    res.send(data);
  });
});
router.get(
  "/yui", (req, res) => {
    try {
      res.status(200).render(path.join(__dirname, "..", 'src', "yui", "yui.ejs"));
    } catch (e) {
      console.error(e);
      res.status(500).send( "Server Error" );
    }
  }
)