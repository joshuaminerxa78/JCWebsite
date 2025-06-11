import { useState } from 'react'
import './Contact.css'

function Contact() {


    const [check, setCheck] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.email) {
            setCheck(true);
            return;
        }
        e.target.submit();
    };
    return (
        <>

            <form
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                hidden
            >
                <input type="text" name="bot-field" />
                <input type="text" name="name" />
                <input type="email" name="email" />
                <textarea name="message"></textarea>
            </form>

            <main className="form-container">
                <h1 id='topic12'>Contact</h1>
                <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit} >
                    <input type="hidden" name="form-name" value="contact" />
                    <input type="hidden" name="form-name" value="contact" />
                    <input type="hidden" name="bot-field" />

                    <label htmlFor="name">Name:</label>
                    <input value={formData.name} onChange={handleChange} type="text" id="name" name="name" required />

                    <label htmlFor="email">Email:</label>
                    <input value={formData.email} onChange={handleChange} type="email" id="email" name="email" required />

                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" value={formData.message}
            onChange={handleChange}></textarea>

                    {check && !formData.email ? (<label htmlFor="submit">I fix in email not work to me and please contact is joshuaclinton790@gmail.com</label>) : (<button onClick={() => setCheck(true)} type="submit">Send Message</button>)}
                </form>
            </main>

        </>
    )
}

export default Contact