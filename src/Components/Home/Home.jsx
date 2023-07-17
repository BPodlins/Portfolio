import '../../Pages/style.css'
import { Container, Row, Col } from 'react-bootstrap'
import  Nav  from '../Nav/Nav';
import Calendar from '../Calendar/Calendar';
import Footer from '../Footer/Footer';
import Fader from './Fader';


function Home(){

    const welcomeTexts = ["Hello I am", "Cześć jestem", "Hola soy", "Bonjour je suis", "Guten Tag ich bin", "Ciao io sono", "Konnichiwa watashi wa"];

    return (
        <div className='background'>
            <Container>
                <Row>
                    <Col md={7}>
                    <Nav />
                    <Fader texts={welcomeTexts} />
                    <div className="text-container">
                        <h2 className="welcome2">Bartosz Podliński</h2>
                    </div>
                    <Calendar />
                    <Footer />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}


export default Home