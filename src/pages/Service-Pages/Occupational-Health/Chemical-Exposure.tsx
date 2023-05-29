import { Container, Button } from "react-bootstrap";
import chemPollutionImg from "../../../assets/chem-pollution.png";
import chemWorkerImg from "../../../assets/chem-worker.png";

const ChemicalExposure = () => (
  <div>
    <Container className="home-custom-container-image text-center">
      <img src={chemPollutionImg} alt="banner" className="sgBizCtrImage" />
      <div className="content-container">
        <div className="spacer"></div>
        <div className="spacer"></div>
        <h1 className="title">
          Fitness to Work, Rehabilitation & Return to Work (RTW) Assessment
        </h1>
        <div className="spacer"></div>
        <p className="description">
          Our doctors are MOM-registered Designated Workplace Doctors (DWDs),
          qualified and equipped to assess and advise on the fitness of your
          employee at work. This minimizes the impact of employee ill health on
          the company, resulting in better work productivity and reduced health
          cost.
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
              src={chemWorkerImg}
              alt="blood-test"
              className="custom-image-responsive"
            />
          </div>
          <div className="col-md-6 p-3 custom-text-align text-color-red">
            <p>
              <b>We provide medical examinations for exposure to:</b>
              <div className="spacer"></div>
              <div className="row">
                <ul className="col-md-6 text-color-blue">
                  <li>Arsenic</li>
                  <li>Astestos</li>
                  <li>Benzene</li>
                  <li>Cadmium and Its Compounds</li>
                  <li>Cotton Dust</li>
                  <li>Fluoride</li>
                  <li>Lead and Its Compounds</li>
                  <li>Manganese</li>
                </ul>
                <ul className="col-md-6 text-color-blue">
                  <li>Mercury and Its Compounds</li>
                  <li>Organophosphates (PCE)</li>
                  <li>Perchloroethylene</li>
                  <li>Free Silica</li>
                  <li>Tar, Pitch, Bitumen and Creosote</li>
                  <li>Trichloroethylene</li>
                  <li>Vinyl Chloride Monomer</li>
                </ul>
              </div>
              <p className="text-color-grey">Onsite services are available.</p>
              <p className="text-color-blue">
                In addition to the MOM regulations, we also help companies
                comply with other occupational health standards such as OSHA
                (Occupational Safety and Health Administration) and NIOSH
                (National Institute for Occupational Safety and Health).
              </p>
              <br />
              <p className="text-color-blue">
                Based on our assessment of the workplace hazards, our team will
                advise and develop appropriate medical surveillance programs,
                providing ongoing support to ensure that these programs are
                effective and compliant with all relevant regulations and
                standards.
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
              </ul>
              <b className="text-color-red">Convenience</b>
              <div className="spacer"></div>
              <ul className="text-color-blue">
                <li>ONE STOP Medical Centres</li>
                <li>
                  Full inhouse facilities (X-ray, ECG, ECG treadmill,
                  Audiometry, Spirometry etc)
                </li>
                <li>On site services available</li>
              </ul>
              <b className="text-color-red">Fast and Reliable</b>
              <div className="spacer"></div>
              <ul className="text-color-blue">
                <li>
                  The majority of our services are conducted in-house in a
                  single location. This allows us to minimize the time required
                  to produce the necessary reports. However, duration to receive
                  reports would be dependent on the type of tests required
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
          <div className="spacer"></div>
        </div>
      </div>
    </Container>
  </div>
);

export default ChemicalExposure;
