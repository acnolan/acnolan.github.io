import contactButtonStyles from './styles/ContactButton.module.css';

const ContactButton = () => {
    return (
        <div className={contactButtonStyles.contactButtonDiv}>
            <a className={contactButtonStyles.email} href="mailto:acnolan@wpi.edu?Subject=Hello%20Andrew!&amp;body=You%20are%20super%20cool!">
                Contact Me!
            </a>
        </div>
    );
}

export default ContactButton;