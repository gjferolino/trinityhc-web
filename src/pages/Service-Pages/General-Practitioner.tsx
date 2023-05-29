import { Container, Button } from "react-bootstrap";
import stethCtrImg from "../../assets/stethoscope.png";
import bloodtestImg from "../../assets/blood-test.png";

const GeneralPractitioner = () => (
  <div>
    <Container className="home-custom-container-image text-center">
      <img src={stethCtrImg} alt="banner" className="sgBizCtrImage" />
      <div className="content-container">
        <div className="spacer"></div>
        <div className="spacer"></div>
        <h1 className="title">General Practitioner Services</h1>
        <div className="spacer"></div>
        <p className="description">
          General Practitioner (GP) services remain the core service provided by
          Trinity Medical Group. Each of our clinics has dedicated permanent
          doctors who are well-established in their respective communities.
        </p>
        <div className="spacer"></div>
        <p className="description">
          Trinity Medical Group recognizes the importance of continuity of care
          in providing medical services to patients. Continuity of care ensures
          that patients receive consistent and coordinated care from their
          healthcare providers, which is essential in ensuring that their
          healthcare needs are met effectively. The organization strives to
          provide a personal touch to each of its patients by establishing
          strong relationships between its healthcare providers and patients.
        </p>
        <div className="spacer"></div>
        <p className="description">
          Overall, Trinity Medical Group is committed to providing high-quality
          General Practitioner services that are patient-centered and focused on
          delivering the best possible outcomes for its patients.
        </p>
        <div className="spacer"></div>
      </div>
      <div className="spacer"></div>
    </Container>
    <Container className="home-custom-container-image">
      <div className="row background-gradient">
        <div className="row">
          <div className="col-md-6 p-3 custom-image-container">
            <img src={bloodtestImg} alt="blood-test" className="custom-image" />
          </div>
          <div className="col-md-6 align-left text-color-red">
            <p className="p-3">
              <b>Our Healthcare Offers:</b>
              <br />
              <ul className="text-color-blue">
                <li>Medical Assessments and Care</li>
                <li>
                  Chronic Condition Management (e.g. Diabetes, Hypertension)
                </li>
                <li>Full Health Screening (Click to find out more)</li>
                <li>Immunizations and Vaccinations (Click to find out more)</li>
                <li>Travel Health Consultations (Click to find out more)</li>
                <li>Men's Wellness</li>
                <li>Women's Health Services</li>
                <li>Paediatrics and Child Health Care</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </Container>
  </div>
);

export default GeneralPractitioner;
