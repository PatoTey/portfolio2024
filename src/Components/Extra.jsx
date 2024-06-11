import { FaLinkedin, FaCopy} from "react-icons/fa"
import { MdEmail } from "react-icons/md";
import "../styles/extra.css"

export default function Extra(){

    function copyToClipboard(){
        const text = document.getElementById("emailCnt").innerHTML
        navigator.clipboard.writeText(text)
    }
    return (
        <section className="extra-section">
            <h1 className="extra-title">Have a project in mind?</h1>
            <p className="extra-subtitle">Contact me at</p>
            <div className="contacts">
                <div className="contact-item" onClick={()=>copyToClipboard()}>
                    <MdEmail className="contact-logo"/> <p id="emailCnt"> ptudelach@hotmail.com</p>  <FaCopy/>
                </div>
                <a href="https://www.linkedin.com/in/patricio-tudela-chavera/" target="_blank" rel="noreferrer" className="contact-item" aria-label="Go to Patricio's Linkedin page">
                    <FaLinkedin className="contact-logo"/> Patricio Tudela 
                </a> 
            </div>
        </section>
    )
}