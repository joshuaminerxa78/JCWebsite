import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

function Contact() {
    const form = useRef();
    const [isSent, setIsSent] = useState(false);
    const [isError, setIsError] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm("service_34gtn2g", "template_3801fww", form.current, "puxjFQW9Qmprs9yBn")
            .then(() => {
                setIsSent(true); setIsError(false);
            })
            .catch(() => {
                setIsSent(false); setIsError(true);
            });
        e.target.reset();
    };

    return (
        <div>
            <main className="form-container">
                <h1 id="topic12">Contact only message email or linkedin DM 'Direct Message' </h1>
            </main>
        </div>
    );
}

export default Contact;
