import '../../Pages/style.css'
import { Container, Row, Col } from 'react-bootstrap'
import  Nav  from '../Nav';
import Calendar from '../Calendar/Calendar';
import Footer from '../Footer';


function Home(){
    return (
        <div className='background'>
            <Container>
                <Row>
                    <Col md={7}>
                        <Nav />
                            <h2 className='welcome'>Hello</h2>
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