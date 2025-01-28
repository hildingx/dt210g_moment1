/* Footer-komponent */

import './Footer.css';

// Skriver ut footer. Tar emot prop 'devName' från App
function Footer(props: {devName: string}) {
    return (
        <footer>
            <p>{props.devName}</p>
        </footer>
    );
};

export default Footer;