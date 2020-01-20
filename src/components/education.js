import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
export default class education extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col="4">
            <p>
              {this.props.startYear}-{this.props.endYear} :-
            </p>
          </Cell>
          <Cell col="6">
            <h4 style={{ marginTop: "0px" }}>
              {this.props.schoolName}
              <p>{this.props.schoolDescription}</p>
            </h4>
          </Cell>
        </Grid>
      </div>
    );
  }
}
