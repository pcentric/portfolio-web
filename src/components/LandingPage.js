import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Typist from "react-typist";
import "../components/LandingPage.css";

export default class LandingPage extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://media3.giphy.com/media/3ohs4ruO9hBMDRbOne/giphy.gif"
              alt="Avatar"
              className="Avatar-image"
            />
            <div className="Banner-text">
              <Typist>
                <h1>
                  Hello I am Priyanshu
                  <Typist.Backspace count={9} delay={4000} />
                  Coder.
                  <Typist.Backspace count={6} delay={1000} />
                  Developer.{" "}
                </h1>
              </Typist>
              <hr />
              <p style={{color:"white"}}>
                HTML/CSS | Bootstrap | JavaScript | React Native | Node JS |
                Express | MongoDB
              </p>
              <div className="social-links">
                {/* Linkedin*/}
                <a
                  href="https://www.linkedin.com/in/priyanshu-srivastava-450a0b190/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://i1.wp.com/www.owlishcommunications.com/thewisdomzone/wp-content/uploads/LINKEDIN-LOGO-2-Animated-Pulsating.gif?fit=500%2C500&ssl=1"
                    alt="Avatar"
                    style={{
                      height: " 70px",
                      paddingTop: "1em",
                      marginBottom: "1rem"
                    }}
                    className="image"
                  />
                </a>
                {/* GitHuB*/}

                <a
                  href="https://github.com/pcentric"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://media.giphy.com/media/WvXuLOqJeJ0I0/giphy.gif"
                    alt="Avatar"
                    style={{
                      height: " 70px",
                      paddingTop: "1em",
                      marginBottom: "-1.8rem"
                    }}
                    className="image"
                  />
                </a>
                {/* Facebook*/}
                <a
                  href="https://www.facebook.com/priyanshu.srivastva.35"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://media0.giphy.com/media/VhbnQX5NKhNFQUzOVp/giphy.gif"
                    alt="Avatar"
                    style={{
                      height: " 70px",
                      paddingTop: "1em",
                      marginBottom: "-1.8rem"
                    }}
                    className="image"
                  />
                </a>
                {/* Linkedin*/}
                <a
                  href="https://mail.google.com/mail/u/0/#inbox?compose=new"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://media1.giphy.com/media/uVsTR4J8zA0GFo6RcR/source.gif"
                    alt="Avatar"
                    style={{
                      height: " 70px",
                      paddingTop: "-1em",
                      marginBottom: "-1.8rem"
                    }}
                    className="image"
                  />
                </a>
              </div>
            </div>
            <img
              src="http://s7.favim.com/orig/150121/adorable-cute-gif-green-Favim.com-2406607.gif"
              alt="Avatar"
              className="Avatar-image-2"
            />
          </Cell>
        </Grid>
      </div>
    );
  }
}
