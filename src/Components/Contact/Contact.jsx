import { useState } from 'react'
import './Contact.css'

function Contact() {
    const [check, setCheck] = useState(false)
    const [text, setText] = useState('')

    return (
        <>
            <main className="form-container">
                <h2 id='topic3'>Contact</h2>
                <form
                    name="contact"
                    method="POST"
                    data-netlify="true"
                    onSubmit={() => setCheck(true)}
                >
                    <input type="hidden" name="form-name" value="contact" />

                    <label htmlFor="name">Name:</label>
                    <input
                        onChange={(e) => setText(e.target.value)}
                        type="text"
                        id="name"
                        name="name"
                        required
                    />

                    <label htmlFor="email">Email:</label>
                    <input
                        onChange={(e) => setText(e.target.value)}
                        type="email"
                        id="email"
                        name="email"
                        required
                    />

                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message"></textarea>

                    {check && text !== "" ? (
                        <label htmlFor="submit">Thank you! Your message has been submitted.</label>
                    ) : (
                        <button type="submit">Send Message</button>
                    )}
                </form>
            </main>
        </>
    )
}

export default Contact
