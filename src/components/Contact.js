import React, { useEffect } from "react";
import { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
export const Contact = () => {
  const formInitialDetails = {
    name: "",
    email: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [title, setTitle] = useState("Connect with me!");
  const [status, setStatus] = useState({});
  const onFormUpdate = (category, value) => {
    setFormDetails({ ...formDetails, [category]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("sending");
    setButtonText("Sending...");

    if (!formDetails.name || !formDetails.email || !formDetails.message) {
      console.log("Empty Fields");
      setStatus({ success: false, message: "Please fill out all fields" });
       setTitle("Send Message");
      setButtonText("Send");
      return;
    }
    try {
      let response = await fetch("http://localhost:8080/contact", {
        method: "POST",
        headers: {
          "Content-Type": "Application/json;charset=utf-8",
        },
        body: JSON.stringify(formDetails),
      });
      let result = await response.json;

      setFormDetails(formInitialDetails);

      if (response.ok) {
        console.log("Message Sent");
        setTimeout(() => {
          setTitle("Sent Message!");
        }, 10000);
        setStatus({ success: true, message: "Message Sent" });
        setButtonText("Send");
      } else {
        console.log(result.status);
        setStatus({ success: false, message: "Message not sent" });
      }
    } catch (error) {
      console.error(error);
      setStatus({ success: false, message: error });
    }
  };

  useEffect(() => { 
    const timer = setTimeout(() => {
      setStatus({});
    }, 3000);
    return () => clearTimeout(timer);
  }, [status]);

  return (
    <section className="contact" id="contact">
      <Container>
        <form onSubmit={handleSubmit}>
          <h2>{title}</h2>
          <Row>
            <Col sm={6} className="px-1">
              <input
                type="text"
                value={formDetails.name}
                placeholder="Name"
                onChange={(e) => onFormUpdate("name", e.target.value)}
              />
            </Col>
            <Col sm={6} className="px-1">
              <input
                type="email"
                value={formDetails.email}
                placeholder="Email Address"
                onChange={(e) => onFormUpdate("email", e.target.value)}
              />
            </Col>
            <Col>
              <textarea
                row="8"
                value={formDetails.message}
                placeholder="Message"
                onChange={(e) => onFormUpdate("message", e.target.value)}
              ></textarea>
              <button type="submit">
                <span>{buttonText}</span>
              </button>
            </Col>
            {status.message && (
              <Col>
                <p className={status.success === false ? "danger" : "success"}>
                  {status.message}
                </p>
              </Col>
            )}
          </Row>
        </form>
      </Container>
    </section>
  );
};
