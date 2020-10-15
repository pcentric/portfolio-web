import React, { Component } from "react";
// import { Grid, Cell } from "react-mdl";
import Typist from "react-typist";
import "../components/LandingPage.css";

export default class LandingPage extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <div className="landing-grid">
          <div className="Banner-text">
            <h1>
              Hello Priyanshu here.
              <i
                style={{ color: "black" }}
                class="animation_icon fa fa-code"
                aria-hidden="true"
              ></i>
            </h1>
            <Typist>
              <h1>
                I am Backend Developer.
                <Typist.Backspace count={18} delay={3000} />
                UI/UX Designer.
                <Typist.Backspace count={20} delay={3000} />
                Full Stack Developer.
              </h1>
            </Typist>
            <p>
              It's Priyanshu here I develop apps and I write code because I love
              to create something new, useful and powerful from scratch. I am
              developing mobile apps / web apps for Indian Unicorn Startups from
              last 5 years. I also have clients from US and Australia.I build as
              per your requirement, by going through the most tiniest and subtle
              details of your need. I use servers like Nodejs, ES6 etc while
              buidling API services for you.
            </p>
            <a
              onClick={() => {
                window.location = "/Projects";
              }}
            >
              My Work
            </a>
          </div>
          <div orientation="left" class="left-side">
            <ul className="Social-medias">
              <li>
                <a
                  href="https://github.com/ps1619"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://image.flaticon.com/icons/svg/37/37819.svg"
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.upwork.com/freelancers/~01d3fc53d25908fd4c"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://www.shareicon.net/data/2017/02/24/879425_upwork_512x512.png"
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                </a>
              </li>
              <li>
                {" "}
                <a
                  href="https://www.linkedin.com/in/priyanshu-srivastava-450a0b190/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://image.flaticon.com/icons/png/512/37/37019.png"
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                </a>
              </li>
              <li>
                {" "}
                <a
                  href="https://www.facebook.com/priyanshu.srivastva.35"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://image.flaticon.com/icons/png/512/59/59439.png"
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                </a>
              </li>
              <li>
                {" "}
                <a
                  href="https://mail.google.com/mail/u/0/#inbox?compose=new"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://image.flaticon.com/icons/svg/60/60543.svg"
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                </a>
              </li>
            </ul>
          </div>
          {/* Component skills  */}
          <section class="content--skills" id="skills">
            <h2 class="content--skills--title content--title wow fadeIn">
              Any skills? <i class="fa fa-terminal" aria-hidden="true"></i>
            </h2>

            <ul class="wow fadeIn delay-1s">
              <li>
                <i class="fab fa-html5"></i>
                <span>Semantic HTML5</span>
              </li>
              <li>
                <i class="fab fa-css3"></i>
                <span>Responsive CSS3</span>
              </li>
              <li>
                <i class="fab fa-js"></i>
                <span>JavaScript</span>
              </li>
              <li>
                <i class="fas fa-laptop-code"></i>
                <span>JQuery</span>
              </li>
              <li>
                <i class="fab fa-sass"></i>
                <span>SCSS/SASS</span>
              </li>
              <li>
                <i class="fab fa-python"></i>
                <span>Python</span>
              </li>
              <li>
                <i class="fab fa-react"></i>
                <span>React</span>
              </li>
              <li>
                <i class="fas fa-flask"></i>
                <span>Flask</span>
              </li>
              <li>
                <i class="fab fa-gitlab"></i>
                <span>Git</span>
              </li>
              <li>
                <i class="fab fa-github"></i>
                <span>GitHub</span>
              </li>
              <li>
                <i class="fas fa-mobile-alt"></i>
                <span>Mobile First</span>
              </li>
              <li>
                <i class="fas fa-edit"></i>
                <span>PSD to Website</span>
              </li>
              <li>
                <i class="far fa-check-circle"></i>
                <span>BEM Methodology</span>
              </li>
              <li>
                <i class="fas fa-search"></i>
                <span>Attention to detail</span>
              </li>
              <li>
                <i class="fas fa-cogs"></i>
                <span>Natural Problem Solver</span>
              </li>
            </ul>
          </section>

          <div className="why-me">
            <h1>How I Develop Website ?</h1>
            <ul>
              <li>
                <h2 class="step-title">Step 1</h2>
                <i class="far fa-file"></i>Plan
                <p>
                  Who's the target audience? What type of business and website?
                  Which web stack will be used? What about cross-compatabilty?
                </p>
              </li>

              <li>
                <h2>Step 2</h2>
                <i class="fas fa-pencil-alt"></i>Design
                <p>I start designing the website based on the planning.</p>
              </li>

              <li>
                <h2>Step 3</h2>
                <i class="fas fa-code"></i>Execute
                <p>
                  I start coding the website. What I design is what I build.
                </p>
              </li>

              <li>
                <h2>Step 4</h2>
                <i class="fas fa-vial"></i>Test
                <p>I check for bugs, cross-compatabilty, and UI/UX design.</p>
              </li>

              <li>
                <h2>Step 5</h2>
                <i class="fas fa-globe"></i>Deploy
                <p>
                  I pushed my code into github and deploy the website. When
                  working with other developers, I instead will push and send a
                  pull request.
                </p>
              </li>

              <li>
                <h2>Step 6</h2>
                <i class="fas fa-sync"></i>Repeat
                <p>
                  I rinse and repeat the process as I add more features and
                  content on the website.
                </p>
              </li>
            </ul>
          </div>
          <div className="Banner-text-1">
            <h1>Get In Touch</h1>

            <p className="text-center">
              Although I'm currently looking for freelance opportunities, my
              inbox is always open. Whether for a potential project or just to
              say hi, I'll try my best to answer your email!
            </p>
            <a href="mailto: priyanshu.s1619@gmail.com">Hire Me</a>
          </div>
        </div>
      </div>
    );
  }
}

//  <Grid className="landing-grid">
//     <Cell col={12}>
//       <img
//         src="https://media3.giphy.com/media/3ohs4ruO9hBMDRbOne/giphy.gif"
//         alt="Avatar"
//         className="Avatar-image"
//       />
//       <div className="Banner-text">
//         <Typist>
//           <h1>
//             Hello I am Priyanshu
//             <Typist.Backspace count={9} delay={4000} />
//             Coder.
//             <Typist.Backspace count={6} delay={1000} />
//             Developer.{" "}
//           </h1>
//         </Typist>
//         <hr />
//         <p style={{color:"white"}}>
//           HTML/CSS | Bootstrap | JavaScript | React Native | Node JS |
//           Express | MongoDB
//         </p>
//         <div className="social-links">
//           {/* Linkedin*/}
//           <a
//             href="https://www.linkedin.com/in/priyanshu-srivastava-450a0b190/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <img
//               src="https://i1.wp.com/www.owlishcommunications.com/thewisdomzone/wp-content/uploads/LINKEDIN-LOGO-2-Animated-Pulsating.gif?fit=500%2C500&ssl=1"
//               alt="Avatar"
//               style={{
//                 height: " 70px",
//                 paddingTop: "1em",
//                 marginBottom: "1rem"
//               }}
//               className="image"
//             />
//           </a>
//           {/* GitHuB*/}

//           <a
//             href="https://github.com/pcentric"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <img
//               src="https://media.giphy.com/media/WvXuLOqJeJ0I0/giphy.gif"
//               alt="Avatar"
//               style={{
//                 height: " 70px",
//                 paddingTop: "1em",
//                 marginBottom: "-1.8rem"
//               }}
//               className="image"
//             />
//           </a>
//           {/* Facebook*/}
//           <a
//             href="https://www.facebook.com/priyanshu.srivastva.35"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <img
//               src="https://media0.giphy.com/media/VhbnQX5NKhNFQUzOVp/giphy.gif"
//               alt="Avatar"
//               style={{
//                 height: " 70px",
//                 paddingTop: "1em",
//                 marginBottom: "-1.8rem"
//               }}
//               className="image"
//             />
//           </a>
//           {/* Linkedin*/}
//           <a
//             href="https://mail.google.com/mail/u/0/#inbox?compose=new"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <img
//               src="https://media1.giphy.com/media/uVsTR4J8zA0GFo6RcR/source.gif"
//               alt="Avatar"
//               style={{
//                 height: " 70px",
//                 paddingTop: "-1em",
//                 marginBottom: "-1.8rem"
//               }}
//               className="image"
//             />
//           </a>
//         </div>
//       </div>
//       <img
//         src="http://s7.favim.com/orig/150121/adorable-cute-gif-green-Favim.com-2406607.gif"
//         alt="Avatar"
//         className="Avatar-image-2"
//       />
//     </Cell>
//   </Grid>
