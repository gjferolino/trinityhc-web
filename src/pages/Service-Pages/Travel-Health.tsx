import { Container, Button } from "react-bootstrap";
import planeSeatsImg from "../../assets/plane_seats.png";
import travelCardImg from "../../assets/travel_card.png";

const TravelHealth = () => (
  <div>
    <Container className="home-custom-container-image text-center">
      <img src={planeSeatsImg} alt="plane_seats" className="sgBizCtrImage" />
      <div className="content-container">
        <div className="spacer"></div>
        <div className="spacer"></div>
        <h1 className="title">Vaccinations</h1>
        <div className="spacer"></div>
        <p className="description">
          Trinity Medical Group provides health assessments, travel health
          advices, a full range of vaccinations, and education on travel-related
          diseases as part of our travel health service.
        </p>
        <div className="spacer"></div>
      </div>
      <div className="spacer"></div>
    </Container>
    <Container className="home-custom-container-image">
      <div className="row background-gradient">
        <div className="row">
          <div className="col-md-2 p-3"></div>
          <div className="col-md-3 p-3">
            <img src={travelCardImg} alt="travel-card" className="img-fluid" />
          </div>
          <div className="col-md-7 p-3">
            <p className="text-color-blue">
              <b className="bold-text-2 text-color-red">How We Can Help</b>
              <br />
              <ul className="text-color-blue">
                <li>
                  <b className="bold-text-3">Pre-travel health assessment</b>
                </li>
                <li>
                  <b className="bold-text-3">Fitness to travel assessment</b>
                  <p className="text-color-grey">
                    - Repatriation <br />
                    - Post injury <br />- Travelling with illness
                  </p>
                </li>
                <li>
                  <b className="bold-text-3">
                    Analysis of travel plans to advise on
                  </b>
                  <p className="text-color-grey">
                    - Infectious Disease (E.g., Malaria prophylaxis) <br />
                    - Non-Infectious Disease <br />- Altitude sickness
                  </p>
                </li>
                <li>
                  <b className="bold-text-3">
                    Travel vaccinations and health advice
                  </b>
                </li>
                <li>
                  <b className="bold-text-3">
                    Education on prevention and self-treatment of travel related
                    diseases
                  </b>
                </li>
              </ul>
              <b className="bold-text-2 text-color-red">We Are Able To Issue</b>
              <ul className="text-color-blue">
                <li>
                  <b className="bold-text-3">Fitness to travel certificates</b>
                </li>
                <li>
                  <b className="bold-text-3">
                    International travel health certificates
                  </b>
                </li>
              </ul>
            </p>
          </div>
        </div>
        <div className="spacer"></div>
        <div className="spacer"></div>
        <div className="row div-who-we-serve">
          <div className="col">
            <br />
            <h1 className="align-center text-color-red">
              Vaccinations Available
            </h1>
          </div>
        </div>
        <div className="row div-who-we-serve text-color-blue">
          <div className="col-md-2 align-left"></div>
          <div className="col-md-3 align-left">
            <br />
            <ul className="text-color-blue-bold-2">
              <li>Yellow Fever (Stamaril)</li>
              <li>Meningococcal Meningitis (Hajj or Umrah)</li>
              <li>Japanese Encephalitis</li>
              <li>Rabies</li>
              <li>Chickenpox (Varicella)</li>
              <li>Cholera</li>
            </ul>
            <br /> <br />
          </div>
          <div className="col-md-3 align-left">
            <br />
            <ul className="text-color-blue-bold-2 ">
              <li>Cervical Cancer (Gardasil/ Cevarix)</li>
              <li>Hepatitis A</li>
              <li>Hepatitis B</li>
              <li>Influenza</li>
              <li>COVID-19</li>
              <li>Measles Mumps and Rubella (MMR)</li>
            </ul>
            <br /> <br />
          </div>
          <div className="col-md-3 align-left">
            <br />
            <ul className="text-color-blue-bold-2">
              <li>Pneumococcal (Prevenar 13, Pneumovax 23)</li>
              <li>Shingles</li>
              <li>Typhoid</li>
              <li>Tetanus/ Diphtheria/ Pertussis</li>
              <li>Polio</li>
            </ul>
            <br /> <br />
          </div>
          <div className="col-md-1 align-left"></div>
        </div>
      </div>
    </Container>
  </div>
);

export default TravelHealth;
