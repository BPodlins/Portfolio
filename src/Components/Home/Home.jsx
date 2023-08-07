import '../../Pages/style.css'
import { Container, Row, Col } from 'react-bootstrap'
import  Nav  from '../Nav/Nav';
import Footer from '../Footer/Footer';
import Fader from './Fader';
import GitHubCalendar from 'react-github-calendar';


function Home(){

    const welcomeTexts = ["Hello I am", "Cześć jestem", "Hola soy", "Bonjour je suis", "Guten Tag ich bin", "Ciao io sono", "Konnichiwa watashi wa"];

    return (
        <div className='background'>
            <Container>
                <Row>
                    <Col md={7}>
                    
                    <div className="text-container">
                    <Fader texts={welcomeTexts} />
                        <h2 className="welcome2">Bartosz Podliński</h2>
                    </div>
                    <Nav />
                    <div className='github-calendar-container' style={{
                        marginTop: '150px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '100px',
                        position: 'fixed',
                        top: '300px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '1500px',
                        height: '400px'
                        }}>
                        <GitHubCalendar
                            username="bpodlins"
                            blockMargin={6}
                            blockRadius={3}
                            blockSize={24}
                            fontSize={18}
                        />
                        </div>
                    <Footer />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}


export default Home