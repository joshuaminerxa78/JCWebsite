import React ,{ useState } from 'react';
import './Contact.css';

function Contact() {
    const [check, setCheck] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = () => {
        setCheck(true); // Show the thank you message
    };

    return (
        <main className="form-container">
            <h2 id='topic3'>Contact</h2>
            <form method="POST" data-netlify="true" onSubmit={handleSubmit}>
                <input type="hidden" name="form-name" value="contact" />
                
                <label htmlFor="name">Name:</label>
                <input 
                    onChange={(e) => setName(e.target.value)} 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    value={name}
                />

                <label htmlFor="email">Email:</label>
                <input 
                    onChange={(e) => setEmail(e.target.value)} 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    value={email}
                />

                <label htmlFor="message">Message:</label>
                <textarea 
                    onChange={(e) => setMessage(e.target.value)} 
                    id="message" 
                    name="message" 
                    value={message}
                ></textarea>

                {check && name && email ? (
                    <label htmlFor="submit">Thank you for your email</label>
                ) : (
                    <button type="submit" value="send message">Send Message</button>
                )}
            </form>
        </main>
    );
}

export default Contact;
