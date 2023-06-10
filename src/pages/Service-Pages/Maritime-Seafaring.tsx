import { Container, Button } from "react-bootstrap";
import shipImg from "../../assets/ship.png";
import maritimeIcon from "../../assets/maritime-icon.png";
import maritimeWorkersImg from "../../assets/maritime-workers.png";
import intSosLogo from "../../assets/INTSOSLogo.png";

const MaritimeSeafaring = () => (
  <div>
    <Container className="home-custom-container-image text-center">
      <img src={shipImg} alt="banner" className="sgBizCtrImage" />
      <div className="content-container">
        <div className="spacer"></div>
        <div className="spacer"></div>
        <h1 className="title">Maritime & Seafaring</h1>
        <div className="spacer"></div>
        <p className="description">
          We offer both in-clinic and onboard seafarers' medical services to
          meet the needs of the seafarer requiring medical attention on land or
          at the anchorage. Our seafarer doctors are both qualified and
          experienced to provide medical consultations, examinations, and
          treatment onboard the vessels to help ensure the health and safety of
          your crew members.
        </p>
      </div>
      <div className="spacer"></div>
    </Container>
    <Container className="home-custom-container-image">
      <div className="row background-gradient">
        <div className="col-md-2"></div>
        <div className="col-md-3 p-3 custom-image-container-2">
          <img
            src={maritimeWorkersImg}
            alt="maritime-worker"
            className="custom-image-responsive"
          />
        </div>
        <div className="col-md-6 p-3 align-left text-color-red">
          <p>
            <b>Seafarer Certifications</b>
            <p className="text-color-blue">
              We conduct medical examinations for seafarers and maritime
              including:
            </p>
            <div className="spacer"></div>
            <ul className="col text-color-blue">
              <li>
                Seafarer's Medical Examination and Certification (Issued in
                accordance with the requirements of the STCW Convention, 1978,
                as amended, and the MLC 2006.) - Maritime and Port Authority of
                Singapore (MPA) Seafarer Medical Examination - Malaysian
                Maritime Medical Examination - Norwegian Seafarer Medical
                Examination (UK's MCA ENG 1 equivalent certificate)
              </li>
              <li>P&I Pre-employment medical examinations (PEME)</li>
            </ul>
            <b>Emergency Response Support</b>
            <p className="text-color-blue">
              We provide an emergency medical response for seafarers requiring
              medical treatment:
            </p>
            <div className="spacer"></div>
            <ul className="col text-color-blue">
              <li>Provision of medical teleconsultation for seafarers</li>
              <li>
                Provision of medical treatment by our doctors or nurses on board
                the ship
              </li>
              <li>Medical escort and surveillance for hospital admission</li>
            </ul>
            <b>Other Related Services</b>
            <ul className="col text-color-blue">
              <li>Assessment for medical fitness for seafarer</li>
              <li>Provision of medications for the medical chest</li>
              <li className="text-color-red"><b>Drug and Alcohol Screening (Click to find out more)</b></li>
              <li>Fitness to travel and travel advice (Click to find out more)</li>
              <li>Vaccination advice including Yellow Fever vaccination (Click to find out more)</li>
            </ul>
          </p>
        </div>
        <div className="spacer"></div>
        <div className="spacer"></div>
        <div className="col-md-1"></div>
        <div className="row background-blue">
          <div className="spacer"></div>
          <Button className="overlay-button-test-3">
            <p className="custom-text-margin">
              <b>Benefits</b>
            </p>
          </Button>
          <div className="spacer"></div>
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-4">
              <div className="custom-col-description p-3 align-left">
                <b className="text-color-red">Convenience</b>
                <div className="spacer"></div>
                <ul className="text-color-blue">
                  <li>ONE STOP Medical Centres</li>
                  <li>Accredited doctors</li>
                  <li>
                    Accredited doctors Full inhouse facilities (X-ray, ECG, ECG
                    treadmill, Audiometry, Spirometry etc)
                  </li>
                </ul>
                <b className="text-color-red">Fast and Reliable</b>
                <div className="spacer"></div>
                <ul className="text-color-blue">
                  <li>
                    The majority of our services are conducted in-house in a
                    single location. This allows us to minimize the time
                    required to produce the necessary reports. Most reports are
                    available within 1-3 days.
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
              </div>
            </div>
            <div className="col-md-6 p-3 align-right">
              <img src={maritimeIcon} alt="icon" className="img-100" />
            </div>
          </div>
        </div>
        <div className="spacer"></div>
        <div className="content-container">
          <div className="description align-left">
            <div className="spacer"></div>
            <div className="row">
              <div className="col-md-2"></div>
              <div className="col-md-4 p-3">
                <p className="text-color-blue">Our Partner</p>
                <img src={intSosLogo} alt="logo" className="sgBizCtrImage" />
              </div>
              <div className="col-md-4 p-3">
                <p className="text-color-blue">Accreditation</p>
                <p className="no-margin-bottom text-color-blue">Norwegian Maritime Authority approved Seafarer Doctor</p>
                <p className="text-color-grey">
                www.sdir.no/en/shipping/seafarers/approved-seafarers-doctors/
                </p>
                <div className="spacer"></div>
                <p className="no-margin-bottom text-color-blue">Malaysian Maritime approved Medical Practitioner for Seafarer Medical Examination</p>
                <p className="text-color-grey">
                www.marine.gov.my/jlm/page/seafarer-1
                </p>
                <div className="spacer"></div>
                <p>Shipowner's P&I Club</p>
              </div>
              <div className="col-md-2"></div>
            </div>
            <br />
          </div>
        </div>
        <div className="spacer"></div>
      </div>
    </Container>
  </div>
);

export default MaritimeSeafaring;
