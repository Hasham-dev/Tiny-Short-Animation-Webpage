import React from 'react';
import Container from '@material-ui/core/Container';
// import { makeStyles } from '@material-ui/core/styles';
import EmailIcon from '@material-ui/icons/Email';
// import AOS from "aos";
// import "aos/dist/aos.css";


function Footer() {
    
    // useEffect(() => {
    //     AOS.init({
    //         duration: 1000,
    //         // delay: 500,
    //         once: true, // whether animation should happen only once - while scrolling down

    //     });
    //     AOS.refresh();
    // });

    return (
        <div className="Footer-main">
            <Container maxWidth="Lg">
                <h4 className='footer-para'>"Pick my brain/cortex and let's get started on your project"</h4>
                <div className="footer-email">
                    <EmailIcon className="email-icon container" />
                    <p className="Footer-para">vakanihasham64@gmail.com</p>
                </div>
            </ Container>
        </div>
    )
}

export default Footer;