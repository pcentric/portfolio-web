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
            <h3>Priyanshu Srivastava</h3>

            <div className="cardBox">
              <div className="card Priyanshu" >
                <div className="card-front">
                  <img
                    className="IMPR"
                    src={priyanshu}
                    style={{ height: "230px" }}
                  />
                </div>
                <div className="card-back" style={{ height: "12rem" }}>
                  <h4>
                    <p>
                     <strong   style={{ fontSize: "25px", fontFamily: "Anton" }}> Who is Programmer :-</strong>
                      <br /> <br /> An Organism that turns caffeine into Software.
                    </p>
                  </h4>
                </div>
              </div>
            </div>
            <p style={{fontFamily:"Audrey", width: "75%", margin: "auto", paddingTop: "12rem" }}>
            <strong>  Hello My name is PRIYANSHU & I'm Full STACK DEVELOPER and I
              developed many awesome things like:- Web-Application, Website,
              Apps, Forms , Pages & many more.
              </strong> </p>
          </Cell>
          <Cell col={6}>
          <h1 className="red-title">WHO AM <strong>‘I’</strong>?</h1>
            <hr />
            <div className="contact-List">
              <List>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                    <a
                      style={{ color: "black" }}
                      href="https://mail.google.com/mail/u/0/inbox"
                    >
                      E-Mail
                    </a>
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                    <a
                      style={{ color: "black" }}
                      href="https://www.linkedin.com/in/priyanshu-srivastava-450a0b190"
                    >
                      LinkedIn
                    </a>
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
