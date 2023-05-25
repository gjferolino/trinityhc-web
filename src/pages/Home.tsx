import { Container } from 'react-bootstrap';
import sgBizCtrImage from '../assets/sg_biz_ctr.png';
import servicesIcon from '../assets/services-icon.png'

const Home = () => (
  <Container className="home-custom-container-image text-center">
    <img src={sgBizCtrImage} alt="Singapore Business Central" className="sgBizCtrImage" />
    <div className="content-container">
        <div className="spacer"></div>
        <div className="spacer"></div>
        <h1 className="title">Welcome to Trinity Medical Group</h1>
        <div className="spacer"></div>
        <p className="description">Our clinics are strategically located around Singapore and we have been providing medical services to the community and our corporate clients for more than 40 years. Our strengths are in Corporate Health Services, Occupational Health Services, Offshore and Maritime Health Services (e.g. Fitness for OGUK, BOSIET, Seafarer medical examination, UK's MCA ENG 1 Equivalent) and Drug & Alcohol Screening.</p>
        <div className="spacer"></div>
        <p className="description">Our expanding Industrial Hygiene Services (e.g. audiometry) have also become an integral component of our goal to provide a one-stop service centre to our corporate clients on all issues relating to health and safety in the workplace.</p>
        <div className="spacer"></div>
    </div>
    <img src={servicesIcon} alt="Services" className="servicesIcon" />
  </Container>
);

export default Home;