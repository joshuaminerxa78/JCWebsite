import { useState } from 'react'
import './Contact.css'

function Contact() {


    const [check, setCheck] = useState(false)
    const [text, setText] = useState('')

    return (
        <>
                <div>
            <main className="form-container">
                <h1 id='topic12'>Contact</h1>
                <form name="contact" method="POST" data-netlify="true" onSubmit="submit">
                    <input type="hidden" name="form-name" value="contact" />

                    <label htmlFor="name">Name:</label>
                    <input onChange={(e) => setText(e.target.value)} type="text" id="name" name="name" required />

                    <label htmlFor="email">Email:</label>
                    <input onChange={(e) => setText(e.target.value)} type="email" id="email" name="email" required />

                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" ></textarea>

                    {check == true && text != "" ? (<label htmlFor="submit">I fix in email not work to me and please contact is joshuaclinton790@gmail.com</label>) : (<button onClick={() => setCheck(true)} type="submit">Send Message</button>)}
                </form>
            </main>
            </div>
        </>
    )
}

export default Contact