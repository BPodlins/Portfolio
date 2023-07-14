import '../../Pages/style.css'
import { Container, Row, Col } from 'react-bootstrap'
import  Nav  from '../Nav/Nav';
import Calendar from '../Calendar/Calendar';
import Footer from '../Footer/Footer';
import Fader from './Fader';


function Home(){
    return (
        <div className='background'>
            <Container>
                <Row>
                    <Col md={7}>
                        <Nav />
                            <Fader texts={["Hello", "Hola", "Bonjour", "Guten Tag", "Ciao", "Konnichiwa"]} />
                            <h2 className='welcome2'>I am Bartosz Podliński</h2>
                        <Calendar/>
                        <Footer/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home