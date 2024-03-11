<section className="contact" id="contact">
  <div className="contact-div">
    <form action="" method="POST">
      <h2>Let's get in touch!</h2>

      <input
        type="text"
        name="name"
        placeholder="Please enter your name"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Please enter email address"
        required
      />
      <input type="text" name="subject" placeholder="Subject" required />
      <textarea
        rows="8"
        name="comments, questions"
        placeholder="message"
      ></textarea>
      <a href="#contact" type="submit" className=".intro-btns">
        Send Message
      </a>
    </form>
  </div>
</section>;
