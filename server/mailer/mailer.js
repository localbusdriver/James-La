import nodemailer from "nodemailer";

async function mailer({ name, email, message }) {
  const contactEmail = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS,
    },
  });

  try {
    // verify connection configuration
    await contactEmail.verify((error) => {
      if (error) {
        console.log(`Error at line 17 in mailer.js\n${error}`);
      } else {
        console.log("Ready to Send");
      }
    });
    console.log("SMTP Server is ready to send emails");

    // send mail to portfolio owner
    const mail = {
      from: name,
      to: process.env.EMAIL,
      subject: "Contact Form Submission - Portfolio",
      html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Subject: Portfolio Contact Form</p>
           <p>Message: ${message}</p>`,
    };

    await contactEmail.sendMail(mail, (error) => {
      if (error) {
        console.error(`Error at line 32 in mailer.js\n${error}`);
        return { code: 400, status: error.toString() };
      }
    });
    console.log("Message Sent");

    // send confirmation email to sender
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
    await contactEmail.sendMail(confirmationEmail, (error) => {
      if (error) {
        console.error(`Error at line 50 in mailer.js\n${error}`);
        return { code: 400, status: error.toString() };
      }
    });
    console.log("Confirmation Email Sent");
    
    return { code: 200, status: "Emails sent successfully" };
  } catch (error) {
    console.error(`Failed to send email: ${error}`);
    return { code: 400, status: error.toString() };
  }
}
export default mailer;
