import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Typist from "react-typist";

import Education from "./education";
import Experience from "./experience";
import Skill from "./Skill";
import '../components/Resume.css'
export default class Resume extends Component {
  render() {
    return (
      // Left - Education Section
      <div className='background'>
        <Grid>
          <Cell className="resume-left-col" col={8}>
            <h2>
              Education &nbsp;
              <img
                    src="https://static.thenounproject.com/png/37271-200.png"
                    alt="Avatar"
                    style={{
                      height: " 120px",
                      paddingTop: "0em",
                      marginBottom: ".8em"
                    }}
                    className="image"
                  />
            </h2>
            <Education
              startYear={2014}
              endYear={2018}
              schoolName="Jesus & Mary School & College :-"
              schoolDescription={
                <strong>
                  Master of Computer Applications - MCA8, Computer Science.
                  <p>
                    " I did not have a definite study plan When I was a student
                    at in school and spent a lot of time using the school 's
                    computers. I love Computers and Programming this gives me a
                    new way to live a life "
                  </p>
                </strong>
              }
            />
            <hr style={{ borderTop: "3px solid #black" }} />
            {/* Experience section */}
            <h2>Experience &nbsp; 
              <img
                    src="https://pngimage.net/wp-content/uploads/2018/06/icon-experience-png-6.png"
                    alt="Avatar"
                    style={{
                      height: " 120px",
                      marginBottom: ".5em"
                    }}
                    className="image"
                  /></h2>
            <Experience
              startYear={<h4> 2016 - Till </h4>}
              firstDescription={
                <p>
                  Experienced as a DEVELOPER skilled in Express.js, Node.js,
                  PHP, Front-end Development, and RESTful WebServices. Strong
                  business development professional with a Master of Computer
                  Applications - MCA8 focused in Computer Science from Jesus and
                  Mary College. Front-end Development I have many experience in
                  mobile development. You’re looking for the good experience
                  android & ios developer, let’s talk about a perfect match!. I
                  will design and develop your android & ios app with best price
                  and time. Please look at my work history so you will get more
                  trust on me and get an idea about my skills.
                </p>
              }
            />
            <hr style={{ borderTop: "3px solid #black" }} />
            {/* Skill section */}
            <h2>
              Skills &nbsp;&nbsp;
              <img
                    src="https://i.pinimg.com/originals/42/a6/e6/42a6e64ba3dffc37d30e2e9983bcbcc9.png"
                    alt="Avatar"
                    style={{
                      height: " 120px",
                      paddingTop: "0em",
                      marginBottom: ".2em"
                    }}
                    className="image"
                  />
            </h2>

            <Skill skill="Frontend" progress={95} name="95%"  />
            <Skill skill="Backend" progress={90} name="90%" />
            <Skill skill="JavaScript" progress={99} name="99%" />
            <Skill skill="HTML/CSS" progress={100} name="100%" />
            <Skill skill="React JS" progress={96} name="96%" />
            <Skill skill="MongoDB" progress={75} name="75%" />
            <Skill skill="Other Languages" progress={85} name="85%" />
          </Cell>
          {/* Right Section */}
          <Cell className="resume-right-col" col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src="https://media.giphy.com/media/LnR3lnyOfT6bGBxkDP/giphy.gif"
                alt="avatar"
                className="priyanshuIm"
              />
            </div>
            <h2 style={{ paddingTop: "1em", textAlign: "center"}}>Priyanshu Srivastava</h2>
            <h4 style={{ color: "Black",textAlign: "center" }}>
             <Typist>Full Stack Developer.<Typist.Backspace count={21} delay={5000}/>Programmer. </Typist>
              <i className="fa fa-laptop" aria-hidden="true" />
            </h4>
            <hr style={{ borderTop: "3px solid #bd1e8d", width: "60%" }} />
            <p>
              <strong>Priyanshu Sriavstava</strong> is the tech. enthusiast of
              dCode .He spends most of his time in thinking about new ideas that
              can dramatically change our world with help of technology.With
              over 3 years of experience in <strong>Programming</strong> and
              <strong>Technology</strong> sector,he has worked in collaboration
              with various Projects.
            </p>
            <br />
            <h6>
              Please contact with me for further discussion. I'm a developer
              with excellent, skills & experience in the following areas:
              Development Language :
              <ul>
                <strong><li>
                  Java (Spring and Hibernate), Python (Odoo, Django) , PHP
                  (Wordpress,Core PHP), Mysql.
                </li>
                <li>
                  Java Script, jQuery, Ajax, JSON <li> REST and Json API </li>
                  <li>Node Js, Angular Js</li>
                  <li> HTML 5 , CSS 3 , Bootstrap Responsive Theme.</li>
                </li></strong>
              </ul>
            </h6>
            <hr style={{ borderTop: "3px solid #bd1e8d", width: "100%" ,textAlign: "center"}} />
            <br />
            <h4>
              Address <i className="fa fa-address-book-o" aria-hidden="true" />
            </h4>
            <hr style={{ borderTop: "3px solid #bd1e8d", width: "50%" }} />
            <p>Lucknow, Uttar Pradesh, India</p>
            
            <h4>
              <img src="https://img.icons8.com/carbon-copy/100/000000/domain.png" />
              Website
            </h4>
            <a href="https://dcode.netlify.com">
              <p style={{ fontSize: "20px" }}>
                dcode.netlify.com
              </p>
            </a>
          </Cell>
        </Grid>
      </div>
    );
  }
}
