import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useWebAnimations from "@wellyshen/use-web-animations";




function Header() {

    const animateTiming = {
        // delay: 500, // Start with a 500ms delay
        duration: 2000, // Run for 1000ms
        iterations: Infinity, // Repeat once
        direction: "alternate", // Run the animation forwards and then backwards
        easing: "ease-in-out", // Use a fancy timing function
    }


    const Heading = useWebAnimations({
        keyframes: {
            color: ["#e3f2fd", "#bbdefb", "#90caf9","#64b5f6","#42a5f5","#1e88e5",], // Go through three colors
        },
        timing:animateTiming
      })
    return (
        <div>
            <div>
                <AppBar position="fixed" className='Header-1' >
                    <Toolbar>
                        <h1 className="Header-Text" ref={Heading.ref}>Tiny Animation Project</h1>
                    </Toolbar>
                </AppBar>
            </div>
        </div>
    )
}

export default Header;