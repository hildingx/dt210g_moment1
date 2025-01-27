import './Footer.css';

function Footer(props: {devName: string}) {
    return (
        <footer>
            <p>{props.devName}</p>
        </footer>
    );
};

export default Footer;