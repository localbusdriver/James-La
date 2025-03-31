import nodemailer from "nodemailer";

import { confirmationEmailTemplate, emailTemplate } from "./utils";

const transporter = nodemailer.createTransport({
  service: process.env.MAIL_SERVICE,
  auth: {
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
  },
});

async function handler(req: Request) {
  try {
    transporter.verify((error: Error | null) => {
      if (error) {
        console.error(error);
        const error_msg = `[ERROR] Could not verify transporter\n${error}`;
        return Response.json({ error_msg }, { status: 500 });
      } else {
        console.log("Transporter verified, ready to send.");
        console.log("SMTP Server is ready to send emails.");
      }
    });

    const { name, email, message } = await req.json();
    console.log(name, email, message);

    const mail = emailTemplate({ name: name, from_email: email, msg: message });
    await new Promise((resolve, reject) => {
      transporter.sendMail(mail, (error, info) => {
        if (error) {
          console.error(`[ERROR] Could not send email\n${error}`);
          const error_msg = `[ERROR] Could not send email\n${error}`;
          reject(error);
          return Response.json({ error_msg }, { status: 500 });
        } else {
          console.log("Email sent successfully.");
          resolve(info);
        }
      });
    });

    const confirmationMail = confirmationEmailTemplate({
      name: name,
      to_email: email,
    });

    let confirmationMailStatus: Error | null = null;
    await new Promise((resolve, reject) => {
      transporter.sendMail(confirmationMail, (error, info) => {
        if (error) {
          console.error(`[ERROR] Could not send confirmation email\n${error}`);
          confirmationMailStatus = error;
          reject(error);
        } else {
          console.log("Confirmation email sent successfully.");
          resolve(info);
        }
      });
    });

    const res = confirmationMailStatus || "Email sent successfully.";

    return Response.json({ res }, { status: 200 });
  } catch (error) {
    console.error(error);
    return Response.json({ error }, { status: 500 });
  }
}
export { handler as POST };
