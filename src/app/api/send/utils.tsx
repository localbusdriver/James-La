interface emailTemplateTypes {
  name: string;
  from_email?: string;
  to_email?: string;
  msg?: string;
}

export const emailTemplate = ({
  name,
  from_email,
  msg,
}: emailTemplateTypes) => {
  return {
    from: `${name} <${from_email}>`,
    to: process.env.MAIL_USERNAME,
    subject: "Portfolio Contact Form",
    html: `<div>
    <p>from: ${name} &#60;${from_email}&#62;</p></br>
    <p>message:</p>
      <p>${msg}</p>
    </div>`,
  };
};

export const confirmationEmailTemplate = ({
  name,
  to_email,
}: emailTemplateTypes) => {
  return {
    from: `${name} <${process.env.MAIL_USERNAME}>`,
    to: to_email,
    subject: "Confirmation Email",
    html: `<div>
        <h3>Hi ${name}!</h3></br>
        <p>Thank you for your email!</p>
        <p>I'll get back to you as soon as I can!</p>
        </br>
        <p>Nga Mihi,</p>
        <p>James La</p>
      </div>`,
  };
};
