import { Container, Button } from "react-bootstrap";
import healthImg from "../../assets/w_health.png";
import hsFamilyImg from "../../assets/hs_family.png";
import hsTableImg from "../../assets/hs_table.png";
import cellsImg from "../../assets/cells.png";

const HealthScreen = () => (
  <div>
    <Container className="home-custom-container-image text-center">
      <img src={healthImg} alt="banner" className="sgBizCtrImage" />
      <div className="content-container">
        <div className="spacer"></div>
        <div className="spacer"></div>
        <h1 className="title">Health Screening</h1>
        <div className="spacer"></div>
        <p className="description">
          Trinity Medical Group is your trusted resource for comprehensive
          health screenings tailored to your specific needs. In today's
          fast-paced world, it's easy to overlook our well-being, but investing
          in regular health screenings is a crucial step towards maintaining a
          healthy and fulfilling life. Our mission is to empower individuals
          like you to take charge of their health by providing accurate,
          reliable, and accessible screening services.
        </p>
        <div className="spacer"></div>
      </div>
      <div className="spacer"></div>
    </Container>
    <Container className="home-custom-container-image">
      <div className="row background-gradient">
        <div className="row">
          <div className="col-md-4 p-3 custom-image-container">
            <img
              src={hsFamilyImg}
              alt="pre-employment"
              className="custom-image-responsive-3"
            />
          </div>
          <div className="col-md-8 p-3 custom-text-align text-color-red">
            <p>
              <b>
                Prioritize Your Health With Our Comprehensive Health Screenings
              </b>
              <div className="spacer"></div>
              <div className="row">
                <p className="text-color-blue">
                  Invest in your future and start prioritizing your health
                  today. Explore our website, schedule a screening, and let us
                  be your trusted partner on the path to optimal well-being.
                  <br />
                  <br />
                  Remember, a healthier tomorrow starts with a health screening
                  today.
                  <br />
                  <br />
                  <b>
                    Below are our diverse array of health screening packages:
                  </b>
                </p>
              </div>
            </p>
            <div className="spacer"></div>
          </div>
          <div>
          <div className="spacer"></div>
            <img
              src={hsTableImg}
              alt="Health Screening Package"
              className="custom-image-responsive-4"
            />
            <div className="row">
              <div className="col-md-4 p-3 custom-image-container">
                <img
                  src={cellsImg}
                  alt="Cells"
                  className="custom-image-responsive-3"
                />
              </div>
              <div className="col-md-8 p-3 custom-text-align text-color-red">
                <p>
                  <b>
                  A Vital Step Towards Early Cancer Detection
                  </b>
                  <div className="spacer"></div>
                  <div className="row">
                    <p className="text-color-blue">
                    LucenceINSIGHT&trade; is a multi-cancer screening tool that screens for up to 10 cancers in a simple blood draw.
                      <br />
                      <br />
                      <b>Click here to find out more</b>
                      <br />
                      <br />
                    </p>
                  </div>
                </p>
                <div className="spacer"></div>
                <div className="spacer"></div>
              </div>
              <div className="spacer"></div>
              <div className="spacer"></div>
              <div className="spacer"></div>
              <div className="spacer"></div>
            </div>
          </div>
          <div className="content-container background-blue">
            <div className="spacer"></div>
            <Button className="overlay-button-test-2">
              <p className="custom-text-margin">
                <b>Benefits</b>
              </p>
            </Button>
            <div className="description align-left">
              <div className="spacer"></div>
              <div className="spacer"></div>
              <ul className="text-color-blue">
                <li>
                  <b>Early detection of health conditions</b>
                </li>
                <li>
                  <b>Prevention and risk assessment</b>
                </li>
                <li>
                  <b>Peace of mind and reduced anxiety</b>
                </li>
                <li>
                  <b>
                    Empowerment and personal responsibility for one's health
                  </b>
                </li>
                <li>
                  <b>Increased lifespan and improved quality of life</b>
                </li>
                <li>
                  <b>Potential cost savings by addressing issues early</b>
                </li>
                <li>
                  <b>Health education and awareness</b>
                </li>
              </ul>
              <p className="text-color-blue">
                These screenings help identify potential health problems early,
                enabling timely treatment and better outcomes. Regular
                screenings contribute to a longer, healthier life and can save
                on healthcare costs. Additionally, they provide education and
                awareness, empowering you to make informed decisions about your
                well-being.
              </p>
              <div className="spacer"></div>
              <div className="spacer"></div>
              <div className="spacer"></div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </div>
);

export default HealthScreen;
