import React, { useEffect } from 'react';
import Container from '@material-ui/core/Container';
// import { makeStyles } from '@material-ui/core/styles';
import EmailIcon from '@material-ui/icons/Email';
import useWebAnimations from "@wellyshen/use-web-animations";
// import AOS from "aos";
// import "aos/dist/aos.css";


function Footer() {
    const animateTiming = {
        // delay: 500, // Start with a 500ms delay
        duration: 2000, // Run for 1000ms
        iterations: Infinity, // Repeat once
        direction: "alternate", // Run the animation forwards and then backwards
        easing: "ease-in-out", // Use a fancy timing function
    }
    // useEffect(() => {
    //     AOS.init({
    //         duration: 1000,
    //         // delay: 500,
    //         once: true, // whether animation should happen only once - while scrolling down

    //     });
    //     AOS.refresh();
    // });
    const Brain = useWebAnimations({keyframes: {
        transform: ["translateY(-70px)"], // Move by 500px
    },
    timing:animateTiming})

    return (
        <div className="Footer-main">
            <Container maxWidth="Lg">
                <h4 className='footer-para'>"Pick my brain/cortex and let's get started on your project"</h4>
                <div className="footer-email">
                    <EmailIcon className="email-icon" />
                    <p className="Footer-para">vakanihasham64@gmail.com</p>
                </div>
            </ Container>
        </div>
    )
}

export default Footer;