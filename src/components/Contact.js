import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";
import priyanshu from "../assets/ab.png";
import "../components/Contact.css";

export default class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h3 style={{ marginTop: "35px" }}>Priyanshu Srivastava</h3>

            <div className="cardBox">
              <div className="card Priyanshu">
                <div className="card-front">
                  <img
                    className="IMPR"
                    src="https://uxwing.com/wp-content/themes/uxwing/download/07-design-and-development/programmer.png"
                    style={{ height: "30vh" }}
                  />
                </div>
                <div className="card-back" style={{ height: "12rem" }}>
                  <h4>
                    <p>
                      <strong style={{ fontSize: "25px", fontFamily: "Anton" }}>
                        Who is Programmer :-
                      </strong>
                      <br /> <br /> An Organism that turns caffeine into
                      Software.
                    </p>
                  </h4>
                </div>
              </div>
            </div>
            <p
              className="introduction"
              style={{
                fontFamily: "Audrey",
                margin: "auto",
              }}
            >
              <strong>
                Hello My name is PRIYANSHU & I'm Full STACK DEVELOPER and I
                developed many awesome things like:- Web-Application, Website,
                Apps, Forms , Pages & many more.
              </strong>{" "}
            </p>
          </Cell>
          <Cell col={6}>
            <h1 className="red-title">
              WHO AM <strong>‘I’</strong>?
            </h1>
            <hr />
            <div className="contact-List">
              <List>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i class="fa fa-tasks" aria-hidden="true"></i>
                    <p>
                      <a
                        style={{ color: "black" }}
                        href="https://www.upwork.com/freelancers/~01d3fc53d25908fd4c"
                      >
                        Upwork
                      </a>
                    </p>
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i class="fab fa-linkedin-in"></i>
                    <p>
                      <a
                        style={{ color: "black" }}
                        href="https://www.linkedin.com/in/priyanshu-srivastava-450a0b190"
                      >
                        LinkedIn
                      </a>
                    </p>
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                    <p>
                      <a
                        style={{ color: "black" }}
                        href="mailto: priyanshu.s1619@gmail.com"
                      >
                        E-Mail
                      </a>
                    </p>
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
