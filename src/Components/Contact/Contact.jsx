import { useState } from 'react'
import './Contact.css'

function Contact() {


    const [check, setCheck] = useState(false)
    const [text, setText] = useState('')

    return (
        <>

            <main className="form-container">
                <h1 id='topic12'>Contact</h1>
                <form name="contact" data-netlify="true" >
                    <input type="hidden" name="form-name" value="name_of_my_form" />

                    <label htmlFor="name">Name:</label>
                    <input onChange={(e) => setText(e.target.value)} type="text" id="name" name="name" required />

                    <label htmlFor="email">Email:</label>
                    <input onChange={(e) => setText(e.target.value)} type="email" id="email" name="email" required />

                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" ></textarea>

                    {check == true && text != "" ? (<label htmlFor="submit">I fix in email not work to me and please contact is joshuaclinton790@gmail.com</label>) : (<button onClick={() => setCheck(true)} type="submit">Send Message</button>)}
                </form>
            </main>

        </>
    )
}

export default Contact