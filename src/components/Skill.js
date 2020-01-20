import React, { Component } from "react";
import { Grid, Cell, ProgressBar } from "react-mdl";

export default class Skill extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col="12" style={{ display: "flex" }}>
            {this.props.skill}

            <ProgressBar
              style={{ margin: "auto", width: "80%" }}
              progress={this.props.progress}
              buffer={98} 
            />
            {this.props.name}
          </Cell>
        </Grid>
      </div>
    );
  }
}
