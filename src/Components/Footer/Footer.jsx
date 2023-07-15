import {
    AiFillGithub,
  } from "react-icons/ai";
  import { FaLinkedinIn } from "react-icons/fa";

import './footer.css';

function Footer(){
    return (
        <div className="footer">
            <h1>Socials</h1>

            <div className="footer-buttons">
                <button onClick={() => {
                    window.open("https://github.com/BPodlins");
                    }} className="social-button" ><AiFillGithub className='icon' />
                </button>

                <button onClick={() => {
                    window.open("https://www.linkedin.com/in/bartosz-podli%C5%84ski-314178224/");
                    }} className="social-button"><FaLinkedinIn className='icon' />
                </button>
            </div>
        </div>
    )
}

export default Footer