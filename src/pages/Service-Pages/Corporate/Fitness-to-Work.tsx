import { Container } from "react-bootstrap";
import injuredHandImg from "../../../assets/injured-hand.png";
import warehouseImg from "../../../assets/warehouse-worker.png";
import ivcon from "../../../assets/ivcon.png";

const FitnessToWork = () => (
  <div>
    <Container className="home-custom-container-image text-center">
      <img src={injuredHandImg} alt="banner" className="sgBizCtrImage" />
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
            <img src={warehouseImg} alt="blood-test" className="custom-image-responsive" />
          </div>
          <div className="col-md-6 p-3 custom-text-align text-color-red">
            <p>
              <b className="text-grey-box">FITNESS TO WORK</b> <br />
              <b>We address common HR concerns such as:</b>
              <br />
              <ul className="text-color-blue">
                <li>Is your employee fit for his job assignment?</li>
                <li>Is your recovering employee well to return to his work?</li>
                <li>
                  How should work be adjusted to accommodate your employee with
                  a medical condition?
                </li>
              </ul>
              <br />
              <b>
                We conduct both standardized and customized assessments based on
                the job scope. Some of the common assessments include:
              </b>
              <br />
              <ul className="text-color-blue">
                <li>Pre-employment/Preplacement Medical Examination</li>
                <li>Re-employment Medical Examination (&#62;Age 62)</li>
                <li>Fitness for Work Assessment</li>
                <li>Return to Work Assessment</li>
                <li>Fitness to Drive Powered Industrial Vehicle (PIV)</li>
                <li>Fitness for Respirator use (SCBA and non-SCBA)</li>
                <li>Fitness for Compressed Air Works</li>
                <li>Fitness for Crane Operators</li>
                <li>Fitness for Waste Treatment Operators</li>
              </ul>
              <br />
              <b className="text-grey-box">RETURN TO WORK</b> <br />
              <b>
                Our Return to Work (RTW) medical assessments aim to facilitate
                the safe and expeditious return to the workplace of your injured
                or sick employees.
              </b>
              <div className="spacer"></div>
              <p className="text-color-blue">
                Our doctors would conduct a thorough medical examination and
                when necessary, a functional capacity evaluation (FCE), to
                assess and recommend a level of work appropriate for your
                employee's health or fitness.
              </p>
            </p>
          </div>
          <div className="row background-blue">
            <div className="spacer"></div>
            <div className="col-md-6 p-3">
              <div className="custom-col-description align-left">
                <b className="text-color-red">
                  Why should you consider a Return to Work program?
                </b>
                <div className="spacer"></div>
                <p className="text-color-blue">
                  A well-executed RTW program would:
                </p>
                <ul className="text-color-blue">
                  <li>Prevent injuries</li>
                  <li>
                    Encourage earlier return to work and reduce sick absences
                  </li>
                  <li>Preserve your work force to optimize productivity</li>
                  <li>Translate into increased cost savings</li>
                </ul>
                <br />
                <p className="text-color-blue">
                  Your employee's well-being at work after the return to work
                  (RTW) is essential to his rehabilitation and maintenance of
                  workability
                </p>
              </div>
            </div>
            <div className="col-md-6 align-right">
              <img src={ivcon} alt="icon" className="img-70" />
            </div>
          </div>
          <div className="spacer"></div>
          <div className="content-container">
            <div className="description align-left">
              <b className="text-color-red">References</b>
              <p className="text-color-blue">
                Ministry of Manpower (MOM) Fitness for Work - Singapore
              </p>
              <p className="text-color-grey">
                www.mom.gov.sg/workplace-safety-and-health/major-hazard-installations/fitness-for-work
              </p>
              <br />
              <p className="text-color-blue">
                Workplace Safety and Health (Medical Examinations Examinations)
                Regulation 2011
              </p>
              <p className="text-color-grey">
                sso.agc.gov.sg/SL/WSHA2006-S516-2011?ValidDate=20130101&Provids=P1II-
              </p>
              <div className="spacer"></div>
              <div className="spacer"></div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </div>
);

export default FitnessToWork;
