import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import useWebAnimations,{flash} from "@wellyshen/use-web-animations";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

function Header2() {

    const animateTiming = {
        // delay: 500, // Start with a 500ms delay
        duration: 2000, // Run for 1000ms
        iterations: Infinity, // Repeat once
        direction: "alternate", // Run the animation forwards and then backwards
        easing: "ease-in-out", // Use a fancy timing function
    }


    const Light = useWebAnimations({keyframes:{
        opacity: [0,1,1,0,1,0]
    },
        timing:animateTiming
    })

    const Brain = useWebAnimations({keyframes: {
        transform: ["translateY(-70px)"], // Move by 500px
    },
    timing:animateTiming})

    const classes = useStyles();

    return (
        <div>
            <div className='Header2-dev'>
                <React.Fragment>
                    <CssBaseline />
                    <Container maxWidth="xl" className='container'>
                        <div className="Main">

                            <Grid container spacing={6}>
                                <Grid item xs={12} sm={5}>
                                    {/* <Paper className={classes.paper}>xs=12</Paper> */}
                                    <div className="Header-Heading" data-aos="flip-up">
                                        <div>
                                            <h1 className="cortex">Cortex</h1>
                                            <h2 className="Header-2para">
                                                CopyWriter
                                            </h2>
                                        </div>
                                        <p className="para">Enhance your communications with psychology-based copywriting and UX writing</p>
                                        <button className="Button" size="small">
                                            <span className='text'>Send a Message</span>
                                        </button>
                                    </div>
                                </Grid>
                                <Grid item xs={12} sm={7}>
                                    <div className='ani-main'>
                                        <div className="ani-main2">
                                            <img  src="http://salman-project4b.surge.sh/images/Intro_Featured_Image_Empty.svg?fbclid=IwAR1Y5hswrINQYRg71oEe7f5sBHok8uTD2N0NEdZzOqgXbU44ozpSJGIhZIE" className="img1" alt="img1"/>
                                            <img ref={Light.ref} src="http://salman-project4b.surge.sh/images/Intro_Front_Layer.svg?fbclid=IwAR1srwuHFS7HB6DDHKrWRygo7rUHMYy4Tj3RYLoFf-Oz3Il8cYHISwGUwZE" className="img2" alt="img2"/>
                                            <img ref={Brain.ref} src="http://salman-project4b.surge.sh/images/Intro_Brain.svg?fbclid=IwAR0s8O5k4Q1ceXFF40vZeXy9LvpROikQZLLLqnz3P3ajss64iJgMZ4MEUHE" className="img3" alt="img3"/>
                                        </div>
                                    </div>
                                </Grid>

                            </Grid>
                        </div>

                    </Container>
                </React.Fragment>
            </div>
        </div>
    )
}

export default Header2;