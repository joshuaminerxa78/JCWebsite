import { useState } from 'react'
import './Contact.css'

function Contact() {

    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const [check, setCheck] = useState(false)

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const encoded = new URLSearchParams(formData).toString();
            const response = await fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: encoded,
            });

            if (response.ok) {
                setSubmitted(true);
                setFormData({ name: '', email: '', message: '' });
            } else {
                console.error('Form submission failed:', response.statusText);
                alert('There was an error submitting your message. Please try again.');
            }
        } catch (error) {
            console.error('Error during form submission:', error);
            alert('Network error. Please check your connection and try again.');
        }
    };

    return (
        <>

            <main class="form-container">
                <h1 id='topic12'>Contact</h1>
                <form name="contact" method="POST" data-netlify="true"  onSubmit={handleSubmit} >
                    <input type="hidden" name="form-name" value="contact" />

                    <label htmlFor="name">Name:</label>
                    <input value={formData.name} onChange={handleChange} type="text" id="name" name="name" required />

                    <label htmlFor="email">Email:</label>
                    <input value={formData.email} onChange={handleChange} type="email" id="email" name="email" required />

                    <label htmlFor="message">Message:</label>
                    <textarea id="message" value={formData.message} onChange={handleChange} ></textarea>

                    {check == true && text != "" ? (<label htmlFor="submit">I fix in email not work to me and please contact is joshuaclinton790@gmail.com</label>) : (<button onClick={() => setCheck(true)} type="submit">Send Message</button>)}
                </form>
            </main>

        </>
    )
}

export default Contact