import React,{useState} from 'react'
import './Contact.css'

function Contact() {

    const [check, setCheck] = useState(false)
    const [text , setText] = useState('')

    return (
        <>

            <main class="form-container">
                <h2 id='topic3'>Contact</h2>
                <form name="contact" method="POST" data-netlify="true" >
                    <input type="hidden" name='form-names' value='contact' />
                    <label for="name">Name:</label>
                    <input onChange={(e) => setText(e.target.value)} type="text" id="name" name="name" required/>

                    <label for="email">Email:</label>
                    <input onChange={(e) => setText(e.target.value)}  type="email" id="email" name="email" required/>

                    <label for="message">Message:</label>
                    <textarea id="message" name="message" ></textarea>

                   {check == true && text != ""? <label for="submit">Thank you submit for email</label>: <button onClick={() => setCheck(true)} type="submit">Send Message</button>} 
                </form>
            </main>

        </>
    )
}

export default Contact