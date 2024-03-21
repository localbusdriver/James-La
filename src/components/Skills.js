import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Row, Col, Container } from "react-bootstrap";
import skills_img1 from "../assets/img/skills1.jpg";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="skills" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skills-bx">
              <h2>Skills</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit nisi ut enim nesciunt, ipsum similique ea, nam voluptas
                quae ratione alias, est doloribus! Maxime dolorum, dolore ipsa
                cupiditate eum dignissimos.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skills-slider"
              >
                <div className="item">
                  <img src={skills_img1} alt="%" />
                  <h5>O'Sushi Website</h5>
                </div>
                <div className="item">
                  <img src={skills_img1} alt="%" />
                  <h5>NWEN304 Project</h5>
                </div>
                <div className="item">
                  <img src={skills_img1} alt="%" />
                  <h5>Web Development</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
