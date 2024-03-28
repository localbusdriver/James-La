import nodemailer from "nodemailer";

function mailer({ name, email, message }) {
  let code = 200;
  let errorStat = [];
  let okStat = [];
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

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      code = 400;
      errorStat.push(error);
      console.log(error);
    } else {
      console.log("Message Sent");
      code = 200;
      okStat.push("Message Sent");
      contactEmail.sendMail(confirmationEmail, (error) => {
        if (error) {
          console.log(error);
          code = 400;
          errorStat.push(error);
        } else {
          console.log("Confirmation Email Sent");
          code = 200;
          okStat.push("Confirmation Email Sent");
        }
      });
    }
  });

  contactEmail.verify((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Ready to Send");
    }
  });

  let res = {
    code: code,
    status: okStat ? code === 200 : errorStat,
  };
  return res;
}
export default mailer;
