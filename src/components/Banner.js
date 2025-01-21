import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/icon-removebg-preview.png";

import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Web Developer", "Web Designer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>{`Hi! I'm Lekhraj Singh Dangi`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer"]'><span className="wrap">{text}</span></span></h1>
                  <p>I have a strong interest in technology, particularly in web development and programming. 
                    During my time in college, I have been actively involved in various projects and coursework related to web development. 
                    I have gained hands-on experience with HTML, CSS, JavaScript, React Js, Node Js, Express Js, MongoDB and other web technologies. 
                    I enjoy creating visually appealing and functional websites, and I'm always eager to learn new skills and technologies in this field.
                    As a college student, I am constantly expanding my knowledge through self-study, online courses, and participating in coding competitions and hackathons. 
                    I am always excited to take on new challenges and contribute my skills to meaningful projects. 
                    Thank you for visiting my portfolio. If you have any inquiries or project opportunities, please feel free to get in touch. I'm eager to apply my skills and contribute to innovative and exciting projects!</p>
                  <button><a href="https://drive.google.com/file/d/1ZNQgbFgMo-qvwQVFzQkerSodogAUhnKk/view?usp=drivesdk" download="resume.pdf">Resume Download</a></button>
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img" />
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
