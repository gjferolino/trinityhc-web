import { Container, Button } from "react-bootstrap";
import oilPlatfImg from "../../assets/oil-platform.png";
import diversImg from "../../assets/divers.png";
import commIcon from "../../assets/commicon.png";
import intSosLogo from "../../assets/INTSOSLogo.png";

const OffshoreDiving = () => (
  <div>
    <Container className="home-custom-container-image text-center">
      <img src={oilPlatfImg} alt="banner" className="sgBizCtrImage" />
      <div className="content-container">
        <div className="spacer"></div>
        <div className="spacer"></div>
        <h1 className="title">Offshore & Diving</h1>
        <div className="spacer"></div>
        <p className="description">
          <b>Trinity Medical Group provides a one-stop healthcare solution</b>{" "}
          to achieve fast, convenient and quality care to offshore workers,
          divers and seafarers and their associated companies. Our doctors are
          OEUK (formerly OGUK/OKOOA) accredited doctors and we have been
          providing advice and health services to the oil and gas industry for
          more than 20 years. Tests are customized to comply to the country or
          company specifications.
        </p>
      </div>
      <div className="spacer"></div>
    </Container>
    <Container className="home-custom-container-image">
      <div className="row background-gradient">
        <div className="col-md-2"></div>
        <div className="col-md-3 p-3 custom-image-container-2">
          <img
            src={diversImg}
            alt="blood-test"
            className="custom-image-responsive"
          />
        </div>
        <div className="col-md-6 p-3 align-left text-color-red">
          <p>
            <b>We Conduct Medical Assessment for Fitness for Offshore Works</b>
            <div className="spacer"></div>
            <ul className="col text-color-blue">
              <li>
                Offshore Energies UK (OEUK), formerly Oil and Gas UK (OGUK)
                Medical Examination{" "}
              </li>
              <li>Petronas Offshore Medical Examination</li>
              <li>
                PTTEP (Thailand) Petronas • ENI • Caligali • Aramco • PT Timas •
                Qatargas • Shell
              </li>
              <li>Fitness to Undertake Underwater EBS training (OEUK)</li>
              <li>
                Fitness for BOSIET (Basic Offshore Safety Induction Emergency
                Training) Course
              </li>
              <li>Fitness for HUET (Helicopter Underwater Escape Training)</li>
            </ul>
            <b>Medical Assessment for Fitness to Dive</b>
            <ul className="col text-color-blue">
              <li>
                Fitness for Commercial Diving (Singapore Standard SS511:2018)
              </li>
              <li>
                Fitness for Commercial Diving (in accordance with standards set
                by UK Health & Safety Executive (HSE), Australian/New Zealand
                Standards AS/NZS 2299.1:2015 and the international standards
                specified by the Diving (PCE)) Medical Advisory Committee (DMAC)
                as per IMCA D 20/01
              </li>
              <li>Fitness for Recreational Diving</li>
            </ul>
            <b>Drug and Alcohol Screening</b>
            <ul className="col text-color-blue">
              <li>
                We conduct drug and alcohol screens both in clinic and on-site
                based on US DOT standards.
              </li>
            </ul>
            <b>Travel Advice</b>
            <ul className="col text-color-blue">
              <li>Fitness to travel</li>
              <li>
                Vaccination (e.g. Yellow Fever vaccination, malaria prophylaxis)
              </li>
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
                  <li>Medical Centres</li>
                  <li>Accredited doctors</li>
                  <li>
                    Accredited doctors Full inhouse facilities (X-ray, ECG, ECG
                    treadmill, Audiometry, Spirometry etc)
                  </li>
                  <li>On site services available</li>
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
              <img src={commIcon} alt="icon" className="img-100" />
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
                <p className="text-color-blue">Useful Link</p>
                <p className="no-margin-bottom text-color-blue">OEUK</p>
                <p className="text-color-grey">
                  https://oeuk.org.uk/oeuk-register-of-examining-uk-doctors/
                </p>
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

export default OffshoreDiving;
