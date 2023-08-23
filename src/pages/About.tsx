import { Container } from "react-bootstrap";
import mediBLocks5Img from "../assets/medi_blocks_5.png";
import mediBLocks4Img from "../assets/medi_blocks_4.png";
import mediBLocks3Img from "../assets/medi_blocks_3.png";

const About = () => (
  <div>
    <Container className="home-custom-container-image text-center">
      <div className="content-container">
        <div className="spacer"></div>
        <div className="spacer"></div>
        <h1 className="title">Overview</h1>
        <div className="spacer"></div>
        <p className="description">
          Trinity Medical Group has more than 30 years of experience working
          with companies from various industries in managing employee’s health.
        </p>
        <div className="spacer"></div>
        <div className="row background-gradient p-0">
          <div className="col-md-5 custom-image-container-2 p-0">
            <img
              src={mediBLocks5Img}
              alt="Medi Blocks"
              className="custom-image-responsive"
            />
          </div>
          <div className="col-md-7 custom-image-container-2 p-0">
            {/* First Div with Text */}
            <div
              className="image-wrapper custom-image-responsive custom-image-width"
              style={{ backgroundImage: `url(${mediBLocks3Img})` }}
            >
              <div className="overlay-content">
                <h2 className="text-color-red">Our Mission</h2>
                <p>
                  To work together with corporates to help:
                  <ul>
                    <br />
                    <li>
                      <b>
                        Provide a safe and healthy environment for employees to
                        work in
                      </b>
                    </li>
                    <br />
                    <li>
                      <b>
                        Maintain a working culture that priorities employee’s
                        health
                      </b>
                    </li>
                    <br />
                    <li>
                      <b>
                        Provide a channel to HR for advice on employees’ health
                        issues
                      </b>
                    </li>
                  </ul>
                </p>
              </div>
            </div>

            {/* Second Div with Text */}
            <div
              className="image-wrapper custom-image-responsive custom-image-width"
              style={{ backgroundImage: `url(${mediBLocks4Img})` }}
            >
              <div className="overlay-content-2">
                <h2 className="text-color-red">Our Values</h2>
                <p>
                  <b>Beneficence:</b>
                  <br />
                  To act in the best interest of our patients.
                  <br /><br />
                  <b>Integrity:</b>
                  <br />
                  To act in the highest level of ethical and personal
                  professionalism.
                  <br /><br />
                  <b>Respect:</b>
                  <br />
                  To treat everyone, regardless of race or religion, with
                  dignity.
                  <br /><br />
                  <b>Recognition:</b>
                  <br />
                  To recognize and value the contributions of every employee in
                  our efforts to achieve the best care and service for our
                  patients.
                  <br /><br />
                  <b>Contribution:</b>
                  <br />
                  To fulfill our social responsibility by contributing to
                  society in a manner that would enhance the lives of those who
                  are in need.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </div>
);

export default About;
