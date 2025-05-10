import React, { useEffect, useState } from 'react';
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
                "I'm a Software Developer.",
                "I'm a Software Engineer.",
                "I'm a Game Developer."
              ]}
              loop={true}
              cursor
              cursorStyle=
              "|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </h1>
      </article>

      <article id="qoute">
        <h1 id="text_qoute_text">
          "I’m passionate about tackling new problems every day, and I believe I can be helpful to companies that need
          better to be software engineering and software development"
        </h1>

        <h1 id="text_qoute_text_Names">By Joshua Clinton</h1>
        <img id="picselft" src={pic} alt="Joshua Clinton" />
      </article>
    </>
  );
}

export default Home;
