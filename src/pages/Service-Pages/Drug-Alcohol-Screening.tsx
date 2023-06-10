import { Container, Button } from "react-bootstrap";
import drugIcon from "../../assets/drug-icon.png";
import drugAlcoholImg from "../../assets/drug-alcohol.png";
import drugkitImg from "../../assets/drug-kit.png";

const DrugAlcoholScreen = () => (
  <div>
    <Container className="home-custom-container-image text-center">
      <img src={drugAlcoholImg} alt="banner" className="sgBizCtrImage" />
      <div className="content-container">
        <div className="spacer"></div>
        <div className="spacer"></div>
        <h1 className="title">Drug & Alcohol Screening</h1>
        <div className="spacer"></div>
        <p className="description">
          At our company, we offer drug and alcohol screening services both
          in-clinic and on-site. Our qualified Medical Review Officers are
          members of the American Association of Medical Review Officers (AAMRO)
          and are trained to provide expert advice on medical and policy issues
          related to drug and alcohol testing. Our assistant MROS (aMRO) are
          responsible for ensuring that the screening process is conducted
          accurately, especially in the event of legal challenges to the
          results.
        </p>
      </div>
      <div className="spacer"></div>
    </Container>
    <Container className="home-custom-container-image">
      <div className="row background-gradient">
        <div className="col-md-2"></div>
        <div className="col-md-3 p-3 custom-image-container-2">
          <img
            src={drugkitImg}
            alt="maritime-worker"
            className="custom-image-responsive"
          />
        </div>
        <div className="col-md-6 p-3 align-left text-color-red">
          <p>
            <b>Why is it important to conduct drug screening correctly?</b>
            <p className="text-color-blue">
              Because a positive drug test can have serious consequences, it is
              crucial to follow the correct screening procedures to:
            </p>
            <div className="spacer"></div>
            <ul className="col text-color-blue">
              <li>
                <b>To guarantee precise and flawless outcomes.</b>
              </li>
              <li>
                <b>To ensure that results can be legally defended.</b>
              </li>
              <li>
                <b>To establish a strict chain of custody (COC)</b> that
                includes proper documentation and leaves an audit trail from
                sample collection to the reception of results. A break in the
                chain of custody is the most common reason for a drug test to be
                deemed legally invalid by the courts.
              </li>
            </ul>
            <b>
              What factors should be considered before conducting a drug and
              alcohol screening?
            </b>
            <div className="spacer"></div>
            <p className="text-color-blue">
              <b>
                What is the drug and alcohol (D&A) misuse policy of the company?
              </b>
              <br />
              It is ideal for the company to have written policies that cover
              information on:
            </p>
            <ul className="col text-color-blue">
              <li>Employee use of controlled substances or illicit drugs.</li>
              <li>
                Procedures to follow and consequences in case of a positive test
                result.
              </li>
            </ul>
            <p className="text-color-blue">
              <b>
                Are there any local regulations that should be considered before
                conducting a drug and alcohol screening?
              </b>
              <br />
              Under Regulation 19 of the Misuse of Drugs Regulations, medical
              practitioners are required to report any suspected misuse of drugs
              to the Ministry of Health (MOH) and the Central Narcotics Bureau
              (CNB) within 7 days.
            </p>
            <p className="text-color-blue">
              <b>
                Have the personnel assigned by your vendor undergone appropriate
                training to conduct the test?
              </b>
              <br />
              It is important to assign a trained Medical Review Officer
              Assistant (aMRO) to conduct the drug screening test, to ensure
              proper documentation and chain of custody. If there is a possible
              positive result, a trained Medical Review Officer (MRO) should be
              assigned to validate the results.
            </p>
          </p>
        </div>
        <div className="spacer"></div>
        <div className="spacer"></div>
        <div className="col-md-1"></div>
        <div className="row background-yellow">
          <div className="spacer"></div>
          <div className="row">
            <h5 className="text-color-red align-center">Drug Test Available</h5>
            <div className="spacer"></div>
            <div className="col-md-2"></div>
            <div className="col-md-2">
              <ul className="text-color-blue-bold">
                <li>Amphetamines</li>
                <li>Barbiturates</li>
                <li>Benzodiazepines</li>
                <li>Cannabinoids (THC)</li>
                <li>Cocaine</li>
              </ul>
            </div>
            <div className="col-md-2">
              <ul className="text-color-blue">
                <li>MDMA</li>
                <li>Methamphetamines</li>
                <li>Methadone</li>
                <li>Methaqualone</li>
                <li>Opiates (MOR)</li>
              </ul>
            </div>
            <div className="col-md-2">
              <ul className="text-color-blue">
                <li>Oxycodone</li>
                <li>Phencyclidine</li>
                <li>Propoxyphene</li>
                <li>Tramadol</li>
                <li>6-Acetylmorphine</li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 p-3 align-right">
            <img src={drugIcon} alt="icon" className="img-100" />
          </div>
        </div>
      </div>
    </Container>
  </div>
);

export default DrugAlcoholScreen;
