import { Container, Button } from "react-bootstrap";
import preEmpImg from "../../../assets/pre_emp_bp.png";
import xrayImg from "../../../assets/xray.png";
import ihpLogoImg from "../../../assets/ihp_logo.png";
import intSosLogoImg from "../../../assets/int_sos_logo.png";
import mhcLogoImg from "../../../assets/mhc_logo.png";

const Preemployment = () => (
  <div>
    <Container className="home-custom-container-image text-center">
      <img src={preEmpImg} alt="banner" className="sgBizCtrImage" />
      <div className="content-container">
        <div className="spacer"></div>
        <div className="spacer"></div>
        <h1 className="title">
          Pre-employment & Re-employment Medical Examination
        </h1>
        <div className="spacer"></div>
        <p className="description">
          Our doctors are accredited DWDs (designated factory doctors), trained
          in occupational health and well placed to assess the fitness of the
          candidate or employee at work. We are available to advise in the
          appropriate tests based on your industry type, company requirements
          and job demands to ensures that your company hire the right candidates
          for the job positions.
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
              src={xrayImg}
              alt="pre-employment"
              className="custom-image-responsive-3"
            />
          </div>
          <div className="col-md-8 p-3 custom-text-align text-color-red">
            <p>
              <b>
                A well-designed program ensure that your employees are
                physically and medically capable of performing their job duties
                safely and effectively.
              </b>
              <div className="spacer"></div>
              <div className="row">
                <p className="text-color-blue">This results in:</p>
                <ul className="col-md-6 text-color-blue">
                  <li>Reduction of work injuries</li>
                  <li>Reduction of insurance costs</li>
                  <li>Improvement of productivity</li>
                </ul>
              </div>
              <p className="text-color-blue">
                Our team are available to help you identify and address any
                health concerns that could potentially impact the employee's
                performance or affect others on the job.
              </p>
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
                  trained in Occupational Health Convenience
                </li>
                <li>
                  Customized tests based on your company requirements and job
                  demands
                </li>
              </ul>
              <b className="text-color-red">Convenience</b>
              <div className="spacer"></div>
              <ul className="text-color-blue">
                <li>ONE STOP Medical Centres</li>
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
            </div>
          </div>
          <div className="spacer"></div>
          <div className="content-container">
            <div className="description align-left">
              <b className="text-color-red">Accreditation</b>
              <p className="text-color-blue no-margin-bottom">
                Ministry of Manpower Designated Workplace Doctors
              </p>
              <p className="text-color-grey">
                www.mom.gov.sg/workplace-safety-and-health/wsh-professionals/find-wsh-professionals/find-designated-workplace-doctor
              </p>
              <br />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 p-3"></div>
          <div className="col-md-2 p-3"></div>
          <div className="col-md-2 p-3">
            <p className="text-color-blue text-center">Our Partners</p>
          </div>
          <div className="col-md-2 p-3"></div>
          <div className="col-md-3 p-3"></div>
        </div>
        <div className="row">
          <div className="col-md-3 p-3"></div>
          <div className="col-md-2 p-2">
            <img src={ihpLogoImg} alt="travel-card" className="img-fluid" />
          </div>
          <div className="col-md-2 p-2">
            <img src={intSosLogoImg} alt="travel-card" className="img-fluid" />
          </div>
          <div className="col-md-2 p-2">
            <img src={mhcLogoImg} alt="travel-card" className="img-fluid" />
          </div>
          <div className="col-md-3 p-3"></div>
          <div className="spacer"></div>
          <div className="spacer"></div>
          <div className="spacer"></div>
          <div className="spacer"></div>
          <div className="spacer"></div>
          <div className="spacer"></div>
        </div>
      </div>
    </Container>
  </div>
);

export default Preemployment;
