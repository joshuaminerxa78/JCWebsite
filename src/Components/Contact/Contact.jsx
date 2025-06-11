import { useState } from 'react'
import './Contact.css'

function Contact() {

    const [check, setCheck] = useState(false)
    const [text, setText] = useState('')

    const handleSubmit = event => {
        event.preventDefault();

        const myForm = event.target;
        const formData = new FormData(myForm);

        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString()
        })
            .then(() => navigate("/thank-you/"))
            .catch(error => alert(error));
    };

    return (
        <>

            <main class="form-container">
                <h1 id='topic12'>Contact</h1>
                <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit}>
                    <input type="hidden" name="form-name" value="contact" />
                    <label for="name">Name:</label>
                    <input onChange={(e) => setText(e.target.value) && handleSubmit} type="text" id="name" name="name" required />

                    <label for="email">Email:</label>
                    <input onChange={(e) => setText(e.target.value) && handleSubmit} type="email" id="email" name="email" required />

                    <label for="message">Message:</label>
                    <textarea id="message" name="message" ></textarea>

                    {check == true && text != "" ? <label for="submit">I fix in email not work to me and please contact is joshuaclinton790@gmail.com</label> : <button onClick={() => setCheck(true)} type="submit">Send Message</button>}
                </form>
            </main>

        </>
    )
}

export default Contact