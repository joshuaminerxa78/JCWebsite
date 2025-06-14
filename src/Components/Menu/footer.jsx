import React from 'react'
import './footer.css'

import linkedin from '../../assets/images/vector-117.svg';
import git from '../../assets/images/github-brands.svg';

function footer() {
    return (
        <>
            <footer id="footercreate">
                <div id="imgicon">
                    <a href="https://www.linkedin.com/in/joshua-clinton-43335726a/" target="_blank"><img class="ima" src={linkedin} /></a>
                    <a href="https://github.com/joshuaminerxa78" target="_blank"><img class="ima" src={git} /></a>
                </div>
            </footer>
        </>
    )
}

export default footer