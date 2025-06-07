import { useState } from 'react'
import './Contact.css'

function Contact() {

    const [check, setCheck] = useState(false)
    const [text , setText] = useState('')

    return (
        <>

            <main class="form-container">
                <h1 id='topic12'>Contact</h1>
                <form method="POST" data-netlify="true" >
                    <input type="hidden" name='form-names' value='contact' />
                    <label for="name">Name:</label>
                    <input onChange={(e) => setText(e.target.value)} type="text" id="name" name="name" required/>

                    <label for="email">Email:</label>
                    <input onChange={(e) => setText(e.target.value)}  type="email" id="email" name="email" required/>

                    <label for="message">Message:</label>
                    <textarea id="message" name="message" ></textarea>

                   {check == true && text != ""? <label for="submit">I fix in email not work to me and please contact is joshuaclinton790@gmail.com</label>: <button onClick={() => setCheck(true)} type="submit" value="send message">Send Message</button>} 
                </form>
            </main>

        </>
    )
}

export default Contact