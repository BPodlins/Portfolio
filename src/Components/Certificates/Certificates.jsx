import './certificates.css'
import { Container } from 'react-bootstrap';
import  Nav2  from '../Nav/Nav2'; 
import Footer from '../Footer/Footer';
import Button from 'react-bootstrap/Button';

function Certificates(){
    return (
        <div className='background'>
            <Nav2 />
            <Container className='certificate-card'>
               <div className='photo'>Photo</div>
               <div className='text'>Text</div>
               <Button className='credential'>Credentials</Button>
            </Container>
            <Footer/>
        </div>
    )
}

export default Certificates