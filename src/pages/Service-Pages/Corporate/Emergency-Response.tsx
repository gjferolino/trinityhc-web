import { Container, Button } from "react-bootstrap";
import emergencyImg from "../../../assets/emergency.png";
import emergencyMaritimeImg from "../../../assets/emergency_maritime_pic.png";

const EmergencyResponse = () => (
  <div>
    <Container className="home-custom-container-image text-center">
      <img src={emergencyImg} alt="banner" className="sgBizCtrImage" />
      <div className="content-container">
        <div className="spacer"></div>
        <div className="spacer"></div>
        <h1 className="title">Maritime & Corporate Emergency Response</h1>
        <div className="spacer"></div>
        <p className="description">
          Trinity Medical Emergency Response is a trusted solution provider for
          various emergency medical needs for both onboard and land in
          industrial settings. Our medical emergency response services are
          specifically designed to allow you to connect swiftly with experienced
          medical professionals when your need arise.
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
              src={emergencyMaritimeImg}
              alt="pre-employment"
              className="custom-image-responsive-3"
            />
          </div>
          <div className="col-md-8 p-3 custom-text-align text-color-red">
            <p>
              <b>Maritime Emergency Response</b>
              <div className="spacer"></div>
              <div className="row">
                <p className="text-color-blue">
                  Dedicated to ensuring the well-being of seafarers, our
                  experienced seafarer doctors and a team of responsive, trained
                  professionals are here to provide rapid and reliable medical
                  assistance when you need it most. Our wide range of maritime
                  emergency medical services include:
                </p>
                <p className="text-color-blue">
                  <b>24 Hours, 7 Days Concierge Assistance:</b>
                  <br />
                  Our dedicated concierge team is available round-the-clock,
                  ready to provide prompt and reliable assistance in various
                  emergency situations.
                </p>
                <br />
                <br />
                <p className="text-color-blue">
                  <b>Medical Transportation:</b>
                  <br />
                  We provide safe and efficient transportation services for
                  patients requiring transfer between medical facilities,
                  ensuring they receive the appropriate care and support during
                  transit.
                </p>
                <p className="text-color-blue">
                  <b>Onboard Sea Care Medical Services:</b>
                  <br />
                  Our team of extensively trained specialists excels in
                  delivering onboard medical consultations, examinations and
                  treatments, prioritizing the health and safety of seafaring
                  crew members.
                </p>
                <br />
                <br />
                <b>Corporate Emergency Response</b> <br />
                <p className="text-color-blue">
                  <br />
                  We understand the importance of 24 hours accessible healthcare
                  services in both emergency and non-emergency situations in the
                  industrial settings. We also assist companies to comply to
                  OSHA standards.
                </p>{" "}
                <br /> <br />
                <p className="text-color-blue">
                  <b className="text-color-gray">Teleconsultation Service:</b>
                  <br />
                </p>{" "}
                <br />
                <ul className="col-md-6 text-color-blue">
                  <li>
                    <b>Convenient and Seamless Healthcare Onsite</b>
                  </li>
                  <p className="text-color-gray">
                    You can receive quality healthcare without leaving the plant
                    premises. Our virtual platform brings medical professionals
                    directly to you, providing convenient access to
                    consultations, medical advice, and treatment
                    recommendations.
                  </p>
                  <li>
                    <b>Reduced Downtime and Increased Productivity</b>
                  </li>
                  <p className="text-color-gray">
                    By eliminating the need for off-site medical visits, our
                    teleconsultation service helps minimize downtime and
                    optimize productivity at the plant. Workers can receive
                    medical advice promptly and efficiently with minimal
                    disruptions to their work schedules.
                  </p>
                  <li>
                    <b>Expert Medical Guidance</b>
                  </li>
                  <li>
                    <b>Expert Occupational Health Advice</b>
                  </li>
                </ul>
              </div>
            </p>
            <div className="spacer"></div>
            <div className="spacer"></div>
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
              <b className="text-color-red">Convenience</b>
              <div className="spacer"></div>
              <ul className="text-color-blue">
                <li>ONE STOP Medical Centres</li>
                <li>Accredited doctors</li>
                <li>
                  Full inhouse facilities (X-ray, ECG, ECG treadmill,
                  Audiometry, Spirometry etc)
                </li>
              </ul>
              <b className="text-color-red">Fast and Reliable</b>
              <div className="spacer"></div>
              <ul className="text-color-blue">
                <li>
                  The majority of our services are conducted in-house in a
                  single location. This allows us to minimize the time required
                  to produce the necessary reports. Most reports are available
                  within 1-3 days
                </li>
              </ul>
              <b className="text-color-red">Communication</b>
              <div className="spacer"></div>
              <ul className="text-color-blue">
                <li>
                  Dedicated customer service specialist to address your
                  corporate needs
                </li>
              </ul>
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

export default EmergencyResponse;
