import express from "express";
import fs from "fs";
import path from "path";
import cors from "cors";
import mailer from "./mailer/mailer.js";
import dotenv from "dotenv";

import React from "react";
import ReactDOMServer from "react-dom/server";

import App from "../src/App.jsx";
import projects from "./data/projectsData.js";

const app = express();
const router = express.Router();

dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "..", "build")));

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
    
    const appHTML = ReactDOMServer.renderToString(<App />);
    const env = process.env;
    const envString = JSON.stringify(env);

    return res.send(
      data.replace(
        '<div id="root"></div>',
        `<div id="root">${appHTML}</div>
        <script>
          window.env = ${envString};
        </script>`
      )
    );
  });
});

router.post("/contact", async (req, res) => {
  try{
  console.log(req.body);
  const response = await mailer(req.body);
  if (response && response.code !== undefined && !isNaN(response.code)) {
    res.status(response.code).json(response.status);
  } else {
    console.error("Invalid response code:", response.code);
    res.status(500).json({ error: "Internal server error" });
    }
  } catch (error) {
    console.error(`Error at line 55 in server.js \n${error}`);
    res.status(500).json({ error: "Internal server error" });
  
  }
});

router.get("/projects", (req, res) => {
  try {
    res.status(200).json(projects);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Could not GET projects.json" });
  }
});
