import { Container } from 'react-bootstrap';
import constructionImage from '../../../assets/underconstruction.png';

const HearingNoise = () => (
  <Container className="text-center">
    <div className="spacer"></div>  
    <div className="spacer"></div>  
    <div className="spacer"></div>  
  <div className="spacer"></div>  
  <img src={constructionImage} alt="Under Construction" className="construction-image" />
  <div className="spacer"></div>  
  <div className="spacer"></div>
  <div className="spacer"></div>
  </Container>
);

export default HearingNoise;