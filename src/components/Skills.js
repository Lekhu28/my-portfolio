import node from "../assets/img/Node.jpg";
import mongodb from "../assets/img/Mongodb.jpg";
import python from "../assets/img/Python.jpg";
import react from "../assets/img/React.jpg";
import html from "../assets/img/html.png";
import css from "../assets/img/css.jpg";
import javascript from "../assets/img/js.jpg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>I have experience developing web applications using React Js. I am proficient in building reusable components, managing state using hooks, and working with popular libraries and frameworks within the React ecosystem. 
                          I have a solid understanding of Node.js and its ecosystem. I can develop server-side applications, RESTful APIs, and work with databases like MongoDB using Node.js. I am also familiar with Express.js for building robust and scalable web applications. 
                          I have experience working with MongoDB, a NoSQL database. I can design database schemas, perform CRUD operations, and work with aggregation pipelines to retrieve and analyze data efficiently. I am also familiar with Mongoose for object modeling in Node.js. 
                          I have a good understanding of Python and its versatility. I can use Python for scripting, web development, data analysis, and automation tasks. I am familiar with popular frameworks like Django and Flask for web development using Python.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={react} alt="React" />
                                <h5>React Js</h5>
                            </div>
                            <div className="item">
                                <img src={node} alt="Node" />
                                <h5>Node Js</h5>
                            </div>
                            <div className="item">
                                <img src={mongodb} alt="MongoDB" />
                                <h5>MongoDB</h5>
                            </div>
                            <div className="item">
                                <img src={python} alt="Python" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={javascript} alt="JavaScript" />
                                <h5>JavaScript</h5>
                            </div><div className="item">
                                <img src={html} alt="HTML" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={css} alt="CSS" />
                                <h5>CSS</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}