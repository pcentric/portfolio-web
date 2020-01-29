import React, { Component } from "react";
import "../components/Skill.css"
export default class Skill extends Component {
  render() {
    return (
      <div>
        <center>
          <div id="SkillBox">
            <center>
              <p>My Skills</p>
            </center>
            <img
              src="https://image.flaticon.com/sprites/new_packs/111826-people-skills.png"
              alt="Skill"
            />
            <div class="SkillBar">
              <div id="Skill-HTML">
                <span class="Skill-Area ">HTML</span>
                <span class="PercentText ">100%</span>
              </div>
            </div>

            <div class="SkillBar">
              <div id="Skill-CSS">
                <span class="Skill-Area ">CSS/CSS3</span>
                <span class="PercentText ">80%</span>
              </div>
            </div>

            <div class="SkillBar">
              <div id="Skill-jQuery">
                <span class="Skill-Area ">jQuery</span>
                <span class="PercentText ">40%</span>
              </div>
            </div>

            <div class="SkillBar">
              <div id="Skill-JS">
                <span class="Skill-Area ">Javascript</span>
                <span class="PercentText ">65%</span>
              </div>
            </div>

            <div class="SkillBar">
              <div id="Skill-XML">
                <span class="Skill-Area ">XML </span>
                <span class="PercentText ">40%</span>
              </div>
            </div>

            <div class="SkillBar">
              <div id="Skill-DJANGO">
                <span class="Skill-Area ">DJANGO</span>
                <span class="PercentText ">60%</span>
              </div>
            </div>

            <div class="SkillBar">
              <div id="Skill-FLASK">
                <span class="Skill-Area ">FLASK </span>
                <span class="PercentText ">55%</span>
              </div>
            </div>

            <div class="SkillBar">
              <div id="Skill-PYTHON">
                <span class="Skill-Area ">PYTHON </span>
                <span class="PercentText ">70%</span>
              </div>
            </div>

            <div class="SkillBar">
              <div id="Skill-SQL">
                <span class="Skill-Area ">SQL </span>
                <span class="PercentText ">80%</span>
              </div>
            </div>

            <div class="SkillBar">
              <div id="Skill-DATABASE">
                <span class="Skill-Area ">DATABASE</span>
                <span class="PercentText ">75%</span>
              </div>
            </div>
          </div>
        </center>
      </div>
    );
  }
}
