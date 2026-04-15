import React from 'react';
import './Home.css';
import { Typewriter } from 'react-simple-typewriter';
import pic from '../../assets/images/Image (2).jpeg';

function Home() {

  return (
    <>
      <article id="textmoving">
        <h1 className="typewrite">
          <span className="wrap">
            <Typewriter
              words={[
                "I'm a software engineer.","I'm a data science", "I'm a data analytics ",
                "Soon coming..."]} loop={true} cursor cursorStyle= "|" typeSpeed={70} deleteSpeed={50} delaySpeed={1500} />
          </span>
        </h1>
      </article>

      <article id="qoute">
        <h1 id="text_qoute_text">
          "I’m passionate about tackling new problems every day, and I believe science and technology interest about real world solve problem and research for  
          help better humanity for solve problem with science and technology ."
        </h1>

        <h1 id="text_qoute_text_Names">By Joshua Clinton</h1>
        <img id="picselft" src={pic} alt="Joshua Clinton" />
      </article>
    </>
  );
}

export default Home;
