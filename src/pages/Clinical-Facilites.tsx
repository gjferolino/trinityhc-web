import { Container } from 'react-bootstrap';
import ecgImg from '../assets/CF_ECG.png';
import treadmillImg from '../assets/CF_Treadmill.png';
import audiometryImg from '../assets/CF_Audiometry.png';

import bloodPressureImg from '../assets/CF_Blood Pressure.png';
import visionTestImg from '../assets/CF_Vision Tests.png';
import bloodTestImg from '../assets/CF_Blood Test.png';

import xraysImg from '../assets/CF_Chest Xray.png';
import spirometryImg from '../assets/CF_Spiro.png';
import drugAlcoholImg from '../assets/CF_Drug & Alcohol Screen.png';

const ClinicalFacilities = () => (
  <div>
    <Container className="home-custom-container-image text-center">
      <div className="content-container">
        <div className="spacer"></div>
        <div className="spacer"></div>
        <h1 className="title">Clinic Facilities</h1>
        <div className="spacer"></div>
        <div className="row">
          <div className="col-md-4 p-3">
            <img
              src={treadmillImg}
              alt="Treadmill"
              className="custom-image-responsive"
            />
            <div className="spacer"></div>
            <h5 className="about-txt">ECG Treadmill</h5>
          </div>
          <div className="col-md-4 p-3">
            <img
              src={ecgImg}
              alt="ECG"
              className="custom-image-responsive"
            />
            <div className="spacer"></div>
            <h5 className="about-txt">ECG</h5>
          </div>
          <div className="col-md-4 p-3">
            <img
              src={audiometryImg}
              alt="Audiometry"
              className="custom-image-responsive"
            />
            <div className="spacer"></div>
            <h5 className="about-txt">Audiometry</h5>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 p-3">
            <img
              src={bloodPressureImg}
              alt="Blood Pressure"
              className="custom-image-responsive"
            />
            <div className="spacer"></div>
            <h5 className="about-txt">Blood Pressure</h5>
          </div>
          <div className="col-md-4 p-3">
            <img
              src={visionTestImg}
              alt="Vision Tests"
              className="custom-image-responsive"
            />
            <div className="spacer"></div>
            <h5 className="about-txt">Vision Tests</h5>
          </div>
          <div className="col-md-4 p-3">
            <img
              src={bloodTestImg}
              alt="Blood Test"
              className="custom-image-responsive"
            />
            <div className="spacer"></div>
            <h5 className="about-txt">Blood Test</h5>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 p-3">
            <img
              src={xraysImg}
              alt="X-rays"
              className="custom-image-responsive"
            />
            <div className="spacer"></div>
            <h5 className="about-txt">X-rays</h5>
          </div>
          <div className="col-md-4 p-3">
            <img
              src={spirometryImg}
              alt="Spirometry"
              className="custom-image-responsive"
            />
            <div className="spacer"></div>
            <h5 className="about-txt">Spirometry</h5>
          </div>
          <div className="col-md-4 p-3">
            <img
              src={drugAlcoholImg}
              alt="Drug & Alcohol Screen"
              className="custom-image-responsive"
            />
            <div className="spacer"></div>
            <h5 className="about-txt">Drug & Alcohol Screen</h5>
          </div>
        </div>
        <div className="spacer"></div>
      </div>
      <div className="spacer"></div>
    </Container>
  
  </div>
);

export default ClinicalFacilities;