import React, { component } from "react";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";
import "./App.css";
function App() {
  return (
    <div className="demo-big-content">
      <Layout>
        <Header
          className="header-color"
          title={
            <Link
              style={{ color: "white", fontFamily: "Montserrat Subrayada" }}
              to="/"
            >
              Portfolio
            </Link>
          }
          scroll
          style={{ backgroundColor: "#5050e2" }}
        >
          <Navigation>
            <Link to="/Resume">
              <strong>Resume</strong>
            </Link>
            <Link to="/Projects">
              <strong>Projects</strong>
            </Link>
            <Link to="/Contact">
              <strong>Contact</strong>
            </Link>
            <Link to="/Skill">
              <strong>Skills</strong>
            </Link>
          </Navigation>
        </Header>

        <Drawer title="Menu">
          <Navigation>
            <Link to="/">
              Home&nbsp;<i class="fa fa-home" aria-hidden="true"></i>
            </Link>
            <Link to="/Resume">
              Resume&nbsp;<i class="fa fa-file-text" aria-hidden="true"></i>
            </Link>
            <Link to="/Projects">
              Projects&nbsp;<i class="fa fa-file-code-o" aria-hidden="true"></i>
            </Link>
            <Link to="/Contact">
              Contact&nbsp;<i class="fa fa-mobile" aria-hidden="true"></i>
            </Link>
            <Link to="/Skill">
              Skills &nbsp;<i class="fas fa-blender-phone"></i>
            </Link>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
          <Main />
          <footer className="footer">
            <a href="https://github.com/ps1619">
              Priyanshu Srivastava{" "}
              <i class="fa fa-rocket" aria-hidden="true"></i>
            </a>
            <br />
          </footer>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
