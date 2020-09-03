import React, { useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
// import useWebAnimations,{flash} from "@wellyshen/use-web-animations";
import AOS from "aos";
import "aos/dist/aos.css";


function Content() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            // delay: 500,
            once: true, // whether animation should happen only once - while scrolling down

        });
        AOS.refresh();
    });

    return (
        <div>
            <div className='Content-Main'>
                <React.Fragment>
                    <CssBaseline />
                    <Container maxWidth="xl" className='container'>
                        <div className="Main-two">

                            <Grid container spacing={6}>
                                <Grid item xs={12} sm={6} data-aos="fade-right"
                                    data-aos-offset="300"
                                    data-aos-easing="ease-in-sine"
                                >
                                    <img src="http://salman-project4b.surge.sh/images/services-1.svg" className="Content-img1" alt="Com" />
                                </Grid>
                                <Grid item xs={12} sm={6} data-aos="fade-left"
                                    data-aos-offset="300"
                                    data-aos-easing="ease-in-sine">
                                    <div className="content-para1">
                                        <h3 className="content-para1-head1">UX WRITING</h3>
                                        <p className="content-para1-head2">I develop clear and useful text in product interfaces to help users reach a specific goal, whether that's completing a form or tapping a button. This includes every type of content from on-screen help systems, user onboarding and in-app messages to push notifications and tooltips.</p>
                                        <div className="jss1">
                                            <Container maxWidth="sm" className="small-container">
                                                <Grid item xs={6} className="bullets">
                                                    Microcopy
                                            </Grid>
                                                <Grid item xs={6} className="bullets">
                                                    Chatbots
                                            </Grid><Grid item sm={6} className="bullets">
                                                    Taxonomy & Labeling
                                            </Grid><Grid item sm={6} className="bullets">
                                                    User Research
                                            </Grid><Grid item sm={6} className="bullets">
                                                    Content Style Guide
                                            </Grid><Grid item sm={6} className="bullets">
                                                    User Testing
                                            </Grid><Grid item sm={6} className="bullets">
                                                    Design Principles
                                            </Grid>
                                            </Container>
                                        </div>
                                    </div>
                                </Grid>
                                <Grid item xs={12} sm={6} data-aos="fade-right"
                                    data-aos-offset="300"
                                    data-aos-easing="ease-in-sine">
                                    <div className="content-para1">
                                        <h3 className="content-para1-head1">Website Copywriting</h3>
                                        <p className="content-para1-head2">Your website is a dialogue with your audience. I capture the essence of your business and communicate it clearly. Carefully considered writing and SEO best practices allow me to craft the perfect user journey online. Let me draw the map that guides users every step of the way from discovery, to consideration, to conversion.</p>
                                        <div className="jss1">
                                            <Container maxWidth="sm" className="small-container">
                                                <Grid item xs={6} className="bullets">
                                                    Information Architecture
                                            </Grid>
                                                <Grid item xs={6} className="bullets">
                                                    Wireframes
                                            </Grid><Grid item sm={6} className="bullets">
                                                    Competitor Analysis
                                            </Grid><Grid item sm={6} className="bullets">
                                                    On-page SEO
                                            </Grid><Grid item sm={6} className="bullets">
                                                    USP/UVP
                                            </Grid><Grid item sm={6} className="bullets">
                                                    Off-page SEO
                                            </Grid><Grid item sm={6} className="bullets">
                                                    Landing Page
                                            </Grid>
                                            </Container>
                                        </div>
                                    </div>
                                </Grid>
                                <Grid item xs={12} sm={6} data-aos="fade-left"
                                    data-aos-offset="300"
                                    data-aos-easing="ease-in-sine"
                                >
                                    <img src="http://salman-project4b.surge.sh/images/services-2.svg" className="Content-img1" alt="Com" />
                                </Grid>
                                <Grid item xs={12} sm={6} data-aos="fade-right"
                                    data-aos-offset="300"
                                    data-aos-easing="ease-in-sine"
                                >
                                    <img src="http://salman-project4b.surge.sh/images/services-3.svg" className="Content-img1" alt="Com" />
                                </Grid>
                                <Grid item xs={12} sm={6} data-aos="fade-left"
                                    data-aos-offset="300"
                                    data-aos-easing="ease-in-sine">
                                    <div className="content-para1">
                                        <h3 className="content-para1-head1">Content Writing</h3>
                                        <p className="content-para1-head2">Give your business a competitive edge with powerful content that can be targeted to any segment of your audience. No matter how large or complex your project, my custom-built solutions including articles, eDMs, and case studies will help you implement a plan that maximizes your business’s online exposure.</p>
                                        <div className="jss1">
                                            <Container maxWidth="sm" className="small-container">
                                                <Grid item xs={6} className="bullets">
                                                    Headlines & Taglines
                                            </Grid>
                                                <Grid item xs={6} className="bullets">
                                                    Content Strategy
                                            </Grid><Grid item sm={6} className="bullets">
                                                    Blogs & Articles
                                            </Grid><Grid item sm={6} className="bullets">
                                                    Social Media Content
                                            </Grid><Grid item sm={6} className="bullets">
                                                    Video Scripts
                                            </Grid><Grid item sm={6} className="bullets">
                                                    eDMs & Newsletters
                                            </Grid><Grid item sm={6} className="bullets">
                                                    Case Studies
                                            </Grid><Grid item sm={6} className="bullets">
                                                    Whitepapers
                                            </Grid>
                                            </Container>
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

export default Content;