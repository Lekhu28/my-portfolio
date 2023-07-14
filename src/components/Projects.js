import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/portf.png";
import projImg2 from "../assets/img/hotel.png";
import projImg3 from "../assets/img/weather.png";
import projImg4 from "../assets/img/spotify.png";

import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Portfolio",
      description: "Made using React Js and other frontend technologies",
      imgUrl: projImg1,
      
    },
    {
      title: "MERN Hotel Booking Website",
      description: "Made using frontend and backend technologies",
      imgUrl: projImg2,
      
    },
    {
      title: "Weather Website",
      description: "Made using HTML, CSS, API, JavaScript",
      imgUrl: projImg3,
      
    },
    {
      title: "Spotify",
      description: "Made using HTML, CSS, JavaScript",
      imgUrl: projImg4,
      
    },
    
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={10}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>I have developed a range of projects that showcase my skills and expertise. 
                  One of my notable projects is a MERN (MongoDB, Express.js, React, and Node.js) hotel booking website that allows users to search for hotels, view details, and make bookings. 
                  Additionally, I have built a React portfolio to showcase my work, incorporating interactive components and animations. 
                  Another project involved using the Spotify API to create a music recommendation and playlist creation application. 
                  Lastly, I created a weather website using HTML, CSS, and JavaScript, fetching weather data from an API to display current conditions and forecasts for specified locations. 
                  These projects demonstrate my proficiency in web development, including front-end frameworks, API integration, and creating dynamic and user-friendly interfaces.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-3 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      
    </section>
  )
}