import './about.css'
import { Container } from 'react-bootstrap';
import  Nav2  from '../Nav/Nav2'; 
import Footer from '../Footer/Footer';

function About(){
    return (
        <div className='background'>
            <Nav2 />
            <Container className='about-container'>
                <div className='about-card'>
                    <h1 className='about-h1'>About Me</h1>
                    <div className='about-text'>I am a sophomore studying at the Polish-Japanese University of Technology, with a strong passion for coding, particularly in Java and web development.
                    In addition to my academic pursuits, I dedicate time to personal coding projects, exploring new technologies and enhancing my programming skills. I love the versatility of Java and enjoy building robust and scalable applications.
                    When I'm not coding, you can find me at the gym, staying fit to keep my mind sharp. I also find solace in books, immersing myself in various subjects that broaden my knowledge and perspective.
                    Basketball is not just a sport, but a metaphor for teamwork and problem-solving, which I apply to my coding journey.
                    I am eager to contribute to the field of web development and create meaningful projects that make a positive impact. Coding provides me with endless possibilities and constant learning, and I am excited to be part of this dynamic industry.
                    </div>
                </div>
                <Footer/>
            </Container>
        </div>
    )
}

export default About;