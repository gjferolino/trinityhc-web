import { Container, Button } from "react-bootstrap";
import noiseWorkImg from "../../../assets/noise_work.png";
import audiometryImg from "../../../assets/audiometry.png";

const HearingNoise = () => (
  <div>
    <Container className="home-custom-container-image text-center">
      <img src={noiseWorkImg} alt="banner" className="sgBizCtrImage" />
      <div className="content-container">
        <div className="spacer"></div>
        <div className="spacer"></div>
        <h1 className="title">Hearing & Noise Monitoring</h1>
        <div className="spacer"></div>
        <p className="description">
          Trinity Medical Group offers hearing and noise monitoring services to
          ensure the safety and health of individuals exposed to high levels of
          noise in the workplace. The services are designed in accordance to the
          Workplace Safety and Health (Noise) Regulations 2011, to prevent
          noise-induced hearing loss caused by excessive noise exposure.
        </p>
        <div className="spacer"></div>
      </div>
      <div className="spacer"></div>
    </Container>
    <Container className="home-custom-container-image">
      <div className="row background-gradient">
        <div className="row">
          <div className="col-md-6 p-3 custom-image-container">
            <img
              src={audiometryImg}
              alt="audiometry"
              className="custom-image-responsive"
            />
          </div>
          <div className="col-md-6 p-3 custom-text-align text-color-red">
            <p>
              <b>Audiometry Testing</b>
              <div className="spacer"></div>
              <div className="row">
                <ul className="col-md-6 text-color-blue">
                  <li>
                    In clinic testing, are available in at our medical centers
                    located at Jurong East and Robinson Road (CBD)
                  </li>
                  <li>On site testing are also available</li>
                  <li>
                    A DWD assessment is also available to determine the extent
                    of noise-induced deafness (NIDs) in employees
                  </li>
                </ul>
              </div>
              <b>Noise Monitoring</b>
              <div className="spacer"></div>
              <div className="row">
                <ul className="col-md-6 text-color-blue">
                  <li>
                    Personal dosimetry, which measures the noise exposure of
                    individuals and provides information on the duration and
                    intensity of noise exposure
                  </li>
                  <li>On site testing are also available</li>
                  <li>
                    Workplace noise survey and mapping, which helps to identify
                    areas with high noise levels and implement measures to
                    reduce the noise exposure of employees
                  </li>
                </ul>
              </div>
            </p>
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
              <b className="text-color-red">Effective</b>
              <div className="spacer"></div>
              <ul className="text-color-blue">
                <li>
                  Our doctors are accredited Designated Workplace Doctors (DWDs)
                  trained in Occupational Health
                </li>
                <li>
                  Save time from looking for multiple providers for different
                  aspects of health safety programs resulting in reduced
                  expenses
                </li>
              </ul>
              <b className="text-color-red">Convenience</b>
              <div className="spacer"></div>
              <ul className="text-color-blue">
                <li>ONE STOP Medical Centres</li>
                <li>
                  Improved coordination and provide convenience by dealing with
                  a single provider for health and safety issues
                </li>
                <li>
                  Maintain a continuous care management program for health
                  surveillance
                </li>
              </ul>
              <b className="text-color-red">Fast and Reliable</b>
              <div className="spacer"></div>
              <ul className="text-color-blue">
                <li>
                  Receive assistance in submission of medical reports to MOM
                </li>
              </ul>
              <b className="text-color-red">Communication</b>
              <div className="spacer"></div>
              <ul className="text-color-blue">
                <li>
                  We work with the HR in employee health matters, to review
                  medical reports, assess the medical conditions in relation to
                  work and help in explaining the medical issues to the employee
                </li>
              </ul>
              <div className="spacer"></div>
              <div className="spacer"></div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </div>
);

export default HearingNoise;
