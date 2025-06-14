import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

function Contact() {
    const form = useRef();
    const [isSent, setIsSent] = useState(false);
    const [isError, setIsError] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm("service_34gtn2g", "template_3801fww", form.current, "puxjFQW9Qmprs9yBn")
            .then(() => {
                setIsSent(true);
                setIsError(false);
            })
            .catch(() => {
                setIsSent(false);
                setIsError(true);
            });

        e.target.reset();
    };

    return (
        <div>
            <main className="form-container">
                <h1 id="topic12">Contact</h1>
                <form ref={form} name="contact" onSubmit={sendEmail}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="user_name" required />

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="user_email" required />

                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" required></textarea>

                    <button type="submit">Send Message</button>
                </form>

                {isSent && <p className="success-message">Thank you!</p>}
                {isError && <p className="error-message">Something went wrong. Please try again later.</p>}
            </main>
        </div>
    );
}

export default Contact;
