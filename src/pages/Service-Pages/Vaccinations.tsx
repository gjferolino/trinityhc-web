import { Container, Button } from "react-bootstrap";
import vaccSyrImg from "../../assets/vacc_syringe.png";
import protFamilyImg from "../../assets/protect_family.png";

const Vaccinations = () => (
  <div>
    <Container className="home-custom-container-image text-center">
      <img src={vaccSyrImg} alt="vaccination" className="sgBizCtrImage" />
      <div className="content-container">
        <div className="spacer"></div>
        <div className="spacer"></div>
        <h1 className="title">Vaccinations</h1>
        <div className="spacer"></div>
        <p className="description">
          Trinity Medical Group offers a comprehensive range of vaccinations for
          your health and protection. Our team of doctors and nurses are at hand
          to provide advice to ensure that the correct and appropriate vaccine
          is given.
        </p>
        <div className="spacer"></div>
      </div>
      <div className="spacer"></div>
    </Container>
    <Container className="home-custom-container-image">
      <div className="row background-gradient">
        <div className="row">
          <div className="col-md-2 p-3"></div>
          <div className="col-md-8 p-3">
            <img
              src={protFamilyImg}
              alt="protect-family"
              className="img-fluid"
            />
          </div>
          <div className="col-md-2 p-3"></div>
        </div>
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <p className="text-color-blue">
              <b className="bold-text-2 text-color-red">Personal Vaccination</b>
              <br />
              Ours clinics are able to provide government subsidized vaccination
              to Singapore citizens using the <b>CHAS/ Pioneer/ Merdeka</b> card
              or
              <b> Medisave</b> based on recommendations from the National Child
              Immunization Schedule (NCID) and the National Adult immunization
              Schedule (NAIS).
            </p>
          </div>
          <div className="col-md-2"></div>
        </div>
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <p className="text-color-blue">
              <b className="bold-text-2 text-color-red">
                Corporate Vaccination
              </b>
              <br />
              Vaccinating your employees has numerous benefits for both you and
              your staff. By taking precautions to keep your workplace healthy,
              you can:
              <br /> <br />
              <ul className="text-color-blue">
                <li>
                  <b className="bold-text-3">
                    Protect your employees against illness
                  </b>
                </li>
                <li>
                  <b className="bold-text-3">Reduce sick rates</b>
                </li>
                <li>
                  <b className="bold-text-3">
                    Reduce absentees and loss of working days
                  </b>
                </li>
                <li>
                  <b className="bold-text-3">Reduce cost</b>
                </li>
                <li>
                  <b className="bold-text-3">Enhance employee's benefits</b>
                </li>
              </ul>
              Trinity Medical can offers vaccinations onsite for your workers at
              corporates rates. For more info, please drop us an email or
              message so that our representative can contact you to discuss your
              needs.
            </p>
          </div>
          <div className="col-md-2"></div>
        </div>
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <p className="text-color-blue">
              <b className="bold-text-2 text-color-red">Travel Vaccination</b>
              <br />
              When you're planning your trip, it is important to be vaccinated
              so that you can safeguard yourself against diseases like dengue,
              malaria or yellow fever. By vaccinating yourself, you can minimise
              any inconveniences while travelling overseas and have a happy
              trip. We provide:
              <br /> <br />
              <ul className="text-color-blue">
                <li>
                  <b className="bold-text-3">
                    Vaccination advice based on travel destinations
                  </b>
                </li>
                <li>
                  <b className="bold-text-3">
                    Yellow fever vaccination and certification
                  </b>
                </li>
                <li>
                  <b className="bold-text-3">
                    Meningococcal vaccination for Hajj and Umrah
                  </b>
                </li>
                <li>
                  <b className="bold-text-3">
                    International travel health certificates
                  </b>
                </li>
              </ul>
            </p>
          </div>
          <div className="col-md-2"></div>
        </div>
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <p className="text-color-blue">
              <b className="bold-text-2 text-color-red">
                Can I Take Multiple Vaccines At The Same Time?
              </b>
              <br />
              Depending on your health and the types of vaccines that you are
              taking, you may be able to take multiple vaccines on the same day.
              Your doctor will be able to advise you upon consultation and
              check-up.
            </p>
          </div>
          <div className="col-md-2"></div>
        </div>
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <p className="text-color-blue">
              <b className="bold-text-2 text-color-red">
                What Types Of Vaccines Do I Need?
              </b>
              <br />
              Upon consultation, your doctor will discuss with you on your
              concerns and vaccination requirements. Your doctor will then
              explain to you the benefits of the vaccine, dosage, frequencies
              and side effects.
            </p>
          </div>
          <div className="col-md-2"></div>
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

export default Vaccinations;
