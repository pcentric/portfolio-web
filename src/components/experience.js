import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
export default class experience extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col="4">
            <p>{this.props.startYear}</p>
          </Cell>
          <Cell col="6">
            <h4 style={{ marginTop: "0px" }}>
              {this.props.firstExp}
              <p>{this.props.firstDescription}</p>
            </h4>
          </Cell>
        </Grid>
      </div>
    );
  }
}
