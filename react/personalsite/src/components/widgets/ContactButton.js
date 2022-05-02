import './styles/ContactButton.styles.css';

const ContactButton = () => {
    return (
        <div className="contactButtonDiv">
            <a className="email" href="mailto:acnolan@wpi.edu?Subject=Hello%20Andrew!&amp;body=You%20are%20super%20cool!">
                Contact Me!
            </a>
        </div>
    );
}

export default ContactButton;