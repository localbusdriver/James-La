const express = require("express");
const app = express();
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));

const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.get("/projects", (req, res) => {
  try {
    const projects = [
      {
        id: 1,
        name: "Project 1",
        description: "This is a description of Project 1",
      },
      // {
      //   id: 2,
      //   name: "Project 2",
      //   description: "This is a description of Project 2",
      // },
      // {
      //   id: 3,
      //   name: "Project 3",
      //   description: "This is a description of Project 3",
      // },
      // {
      //   id: 4,
      //   name: "Project 4",
      //   description: "This is a description of Project 4",
      // },
    ];
    res.json(projects);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

router.post("/contact", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;
  const mail = {
    from: name,
    to: process.env.EMAIL,
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Subject: Portfolio Contact Form</p>
           <p>Message: ${message}</p>`,
  };

  const confirmationEmail = {
    from: "James La",
    to: email,
    subject: "Email Confirmation",
    html: `<p>Hi ${name},</p></br />
          <p>Thank you for your message. I will get back to you as soon as possible.</p><br />
          <p>Best Regards,</p>
          <p>James La</p>
          `,
  };

  contactEmail.sendMail(confirmationEmail, (error) => {
    if (error) {
      console.log(error);
      res.json(error);
    } else {
      console.log("Confirmation Email Sent");
      res.json({ code: 200, status: "Confirmation Email Sent" });
    }
  });

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json(error);
      console.log(error);
    } else {
      console.log("Message Sent");
      res.json({ code: 200, status: "Message Sent" });
    }
  });

  contactEmail.verify((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Ready to Send");
    }
  });
});
