import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  CardText,
  Cell,
  Card,
  CardActions,
  CardTitle,
  Button,
  CardMenu
} from "react-mdl";
import "../components/Projects.css";
export default class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }
  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="background-2">
          <div className="projects-grid-2">
            {/* Project 1 */}
            <Card className="card-1" shadow={10}>
              <CardTitle
                style={{
                  color: "black ",
                  height: "176px",
                  background:
                    "url(https://anxietyreliefproject.com/wp-content/uploads/2019/07/Mindfulness-Meditation.jpg) center / cover"
                }}
              >
                <h6 style={{ paddingTop: "14em" }}>Meditation App</h6>
              </CardTitle>
              <CardText style={{ paddingTop: "4em", color: "gray" }}>
                <strong>
                  Meditation is an age-old practice that has renewed itself in
                  many different cultures and times. Despite its age, however,
                  there remains a mystery and some pdadpa ambiguity as to what
                  it is, or even how one performs it. The practice and tradition
                  of meditation dates back thousands of years having appeared in
                  many eastern traditions. Meditation’s ancient roots cloud its
                  origins from being attributed to a sole inventor or religion,
                  though Bon, Hindu, Shinto, Dao, and later, Buddhism are
                  responsible for its development. Its practice has permeated
                  almost all major world religions, but under different names.
                  It has become a practice without borders, influencing millions
                  with its tranquil and healing effects.
                </strong>
              </CardText>
              <CardActions border>
                <Button
                  colored="Github"
                  href="https://github.com/pcentric/Meditation-App"
                >
                  GitHub
                </Button>
              </CardActions>
            </Card>
            {/* Project 2 */}

            <Card className="card-2" shadow={10}>
              <CardTitle
                style={{
                  color: "black ",
                  height: "176px",
                  background:
                    "url(https://i.ya-webdesign.com/images/rock-paper-scissors-png-1.png) center / cover"
                }}
              >
                <h6 style={{ paddingTop: "14em" }}> Rock-Paper-Scissor-Game</h6>
              </CardTitle>
              <CardText style={{ paddingTop: "4em" }}>
                <strong>
                  On your first throw against an inexperienced male opponent,
                  the best choice is paper because that will beat rock. In case
                  of paper, scissors wins; should the opponent choose scissors,
                  it's a tie. RPS players mentally categorize their throws as
                  winners and losers. This is a variation of the Chinese games
                  introduced in the 17th century. roshambo (games) the game of
                  rock paper scissors. (as three words, ro sham bo) the
                  syllables called out by players of rock paper scissors to
                  synchronize their timing. a method of selecting, for example,
                  which of two people perform a task: each person simultaneously
                  makes one of three hand gestures representing a rock, a sheet
                  of paper, and a pair of scissors respectively.
                </strong>
              </CardText>
              <CardActions border>
                <Button
                  colored="Github"
                  href="https://github.com/pcentric/Rock-Paper-Scissor-Game"
                >
                  GitHub
                </Button>
              </CardActions>
              <CardMenu style={{ color: "blue" }}></CardMenu>
            </Card>
            {/* Project 3 */}
            <Card className="card-3" shadow={10}>
              <CardTitle
                style={{
                  color: "black ",
                  height: "176px",
                  background:
                    "url(https://img.pngio.com/weather-targeting-weather-png-350_350.jpg) center / cover"
                }}
              >
                <h6 style={{ paddingTop: "14em" }}> Weather-Site</h6>
              </CardTitle>
              <CardText style={{ paddingTop: "4em" }}>
                <strong>
                  The simplest way to describe climate is to look at average
                  temperature and precipitation over time. Other useful elements
                  for describing climate include the type and the timing of
                  precipitation, amount of sunshine, average wind speeds and
                  directions, number of days above freezing, weather extremes,
                  and local geography. the composite or generally prevailing
                  weather conditions of a region, as temperature, air pressure,
                  humidity, precipitation, sunshine, cloudiness, and winds,
                  throughout the year, averaged over a series of years.earn how
                  four factors—temperature, wind, precipitation, and sunlight
                  and clouds—are present in different types of weather in this
                  video gallery from WGBH.
                </strong>
              </CardText>
              <CardActions border>
                <Button
                  colored="Github"
                  href="https://github.com/pcentric/Weather-Site "
                >
                  GitHub
                </Button>
              </CardActions>
              <CardMenu style={{ color: "blue" }}></CardMenu>
            </Card>
            {/* Project-4 */}
            <Card className="card-3" shadow={10}>
              <CardTitle
                style={{
                  color: "black ",
                  height: "176px",

                  background:
                    "url(https://upload.wikimedia.org/wikipedia/en/thumb/d/db/Symbol_list_class.svg/1200px-Symbol_list_class.svg.png) center / cover"
                }}
              >
                <h6 style={{ paddingTop: "14em" }}> CraigList Code</h6>
              </CardTitle>
              <CardText style={{ paddingTop: "4em" }}>
                <strong>
                  CodeList is an Indian classified advertisements clone website
                  of CraigList with sections devoted to jobs, housing, for sale,
                  items wanted, services, community service, gigs, résumés, and
                  discussion forums. Having observed people helping one another
                  in friendly, social, and trusting communal ways on the
                  Internet via the WELL, MindVox and Usenet, and feeling
                  isolated as a relative newcomer to San Francisco, Craigslist
                  founder Craig Newmark decided to create something similar for
                  local events. In early 1995, he began an email distribution
                  list to friends. Most of the early postings were submitted by
                  Newmark and were notices of social events of interest to
                  software.
                </strong>
              </CardText>
              <CardActions border>
                <Button
                  colored="Github"
                  target="_blank"
                  href="https://code-list-search.herokuapp.com/"
                >
                  Live Preview
                </Button>
              </CardActions>
            </Card>
            {/* Project 4 */}
            <Card className="card-4" shadow={10}>
              <CardTitle
                style={{
                  color: "black ",
                  height: "176px",
                  background:
                    "url(https://i.ya-webdesign.com/images/free-travel-icons-png.png) center / cover"
                }}
              >
                <h6 style={{ paddingTop: "14em" }}> Travello Website</h6>
              </CardTitle>
              <CardText style={{ paddingTop: "4em" }}>
                <strong>
                  Travello is a global travel company and social network that's
                  available on mobile platforms. This app is the clone of the
                  website includes a way for travellers to share their
                  experience wherever they go and easily connect with other
                  travellers wherever they go. The company is based in
                  Queensland, Australia and was founded in 2014 by Mark Cantoni
                  and Ryan Hanly.
                </strong>
              </CardText>
              <CardActions border>
                <Button
                  colored="Github"
                  href="https://github.com/pcentric/travello "
                >
                  GitHub
                </Button>
              </CardActions>
              <CardMenu style={{ color: "blue" }}></CardMenu>
            </Card>
            {/* Project 5 */}
          
          </div>
        </div>
      );
    }
  }
  render() {
    return (
      <div className="background-3a">
        <div className="category-Tabs">
          <Tabs
            activeTab={this.state.activeTab}
            onChange={tabId => this.setState({ activeTab: tabId })}
            ripple
          >
            <Tab>Projects</Tab>
          </Tabs>
          <Grid>
            <Cell col={12}>
              <div className="Content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
        </div>
      </div>
    );
  }
}
