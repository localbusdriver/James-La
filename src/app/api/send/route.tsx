import nodemailer from "nodemailer";
import { emailTemplate, confirmationEmailTemplate } from "./utils";

const transporter = nodemailer.createTransport({
  service: process.env.MAIL_SERVICE,
  auth: {
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
  },
});

async function handler(req: Request) {
  try {
    transporter.verify((error) => {
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

    await transporter.sendMail(mail, (error) => {
      if (error) {
        console.error(`[ERROR] Could not send email\n${error}`);
        const error_msg = `[ERROR] Could not send email\n${error}`;
        return Response.json({ error_msg }, { status: 500 });
      } else {
        console.log("Email sent successfully.");
      }
    });

    const confirmationMail = confirmationEmailTemplate({
      name: name,
      to_email: email,
    });

    let confirmationMailStatus: Error | null = null;
    await transporter.sendMail(confirmationMail, (error) => {
      if (error) {
        console.error(`[ERROR] Could not send confirmation email\n${error}`);
        confirmationMailStatus = error;
      } else {
        console.log("Confirmation email sent successfully.");
      }
    });

    const res = confirmationMailStatus || "Email sent successfully.";

    return Response.json({ res }, { status: 200 });
  } catch (error) {
    console.error(error);
    return Response.json({ error }, { status: 500 });
  }
}
export { handler as POST };
