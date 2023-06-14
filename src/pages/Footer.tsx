import { Button, Container, Form } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import constructionImage from "../assets/underconstruction.png";

const Footer = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <Container className="home-custom-container-image">
      <Button className="overlay-button-test">
        <p className="custom-text-margin"><h3>Get In Touch With Us</h3></p>
      </Button>
      <div className="row no-gutters background-div">
        <div className="col-md-4">
          <Form>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                className="text-field-margin-bottom"
                type="text"
                placeholder="Enter your name"
              />
            </Form.Group>
            <Form.Group controlId="phone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                className="text-field-margin-bottom"
                type="tel"
                placeholder="Enter your phone number"
              />
            </Form.Group>
          </Form>
        </div>
        <div className="col-md-4">
          <Form>
            <Form.Group controlId="company">
              <Form.Label>Company Name</Form.Label>
              <Form.Control
                className="text-field-margin-bottom"
                type="text"
                placeholder="Enter your company name"
              />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                className="text-field-margin-bottom"
                type="email"
                placeholder="Enter your email"
              />
            </Form.Group>
          </Form>
          {!isMobile && (
            <Button className="button-submit d-block mx-auto mt-3">
              <h6 className="custom-text-margin">Submit</h6>
            </Button>
          )}
        </div>
        <div className="col-md-4">
          <Form>
            <Form.Group controlId="message">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Enter your message"
              />
            </Form.Group>
          </Form>
        </div>
        {isMobile && (
        <div className="row mt-3">
          <div className="col text-center">
            <Button className="button-submit">
              <h6 className="custom-text-margin">Submit</h6>
            </Button>
          </div>
        </div>
      )}
      </div>
      <footer className="bg-light text-dark text-center">
        <p className="m-0 py-3">
          COPYRIGHT&copy; 2023. TRINITY MEDICAL GROUP. ALL RIGHTS RESERVED.
        </p>
      </footer>
    </Container>
  );
};

export default Footer;
