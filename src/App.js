import React, { component } from "react";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";
function App() {
  return (
    <div className="demo-big-content">
      <Layout>
        <Header
          className="header-color"
          title={
            <Link style={{ textDecoration: "none", color: "Black" }} to="/">
              Portfolio
            </Link>
          }
          scroll
        >
          <Navigation>
            <Link
              style={{ textDecoration: "none", color: "Black" }}
              to="/Resume"
            >
              <strong>Resume</strong>
            </Link>
            <Link
              style={{ textDecoration: "none", color: "Black" }}
              to="/Projects"
            >
              <strong>Projects</strong>
            </Link>
            <Link
              style={{ textDecoration: "none", color: "Black" }}
              to="/Contact"
            >
              <strong>Contact</strong>
            </Link>
          </Navigation>
        </Header>

        <Drawer title="Menu">
          <Navigation>
            <Link to="/">
              Home&nbsp;<i class="fa fa-home" aria-hidden="true" ></i>
            </Link>
            <Link to="/Resume">
              Resume&nbsp;<i class="fa fa-file-text" aria-hidden="true" ></i>
            </Link>
            <Link to="/Projects">
              Projects&nbsp;<i class="fa fa-file-code-o" aria-hidden="true" ></i>
            </Link>
            <Link to="/Contact">
              Contact&nbsp;<i class="fa fa-mobile" aria-hidden="true" ></i>
            </Link>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
          <Main />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
