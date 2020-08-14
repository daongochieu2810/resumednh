import React, { Component } from "react";

class Resume extends Component {
  render() {
    this.props.data = JSON.parse(require('../resumeData.json'))
    if (this.props.data) {
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function (education) {
        return (
          <div key={education.school}>
            <h3>{education.school}</h3>
            <p className="info">
              {education.degree} <span>&bull;</span>
              <em className="date">{education.graduated}</em>
            </p>
            <p>{education.description}</p>
          </div>
        );
      });
      var work = this.props.data.work.map(function (work) {
        return (
          <div key={work.company}>
            <h3>{work.company}</h3>
            <p className="info">
              {work.title}
              <span>&bull;</span> <em className="date">{work.years}</em>
            </p>
            <p>{work.description}</p>
          </div>
        );
      });
      var projects = this.props.data.projects.map(function (project) {
        return (
          <div key={project.name}>
            <h3>{project.name}</h3>
            <p className="info">
              {project.title}
              <span>&bull;</span> <em className="date">{project.years}</em>
            </p>
            <p>{project.description}</p>
            {project.name == "I'm the Best Coder, Shopee" ? (
              <a href={project.link} target="_blank">
                Link to Leader Board
              </a>
            ) : null}
            {project.name == "Hack&Roll 2020, NUS Hackers" ? (
              <a href={project.link} target="_blank">
                Demo
              </a>
            ) : null}
            {project.name == "ToDo List Web Application" ? (
              <a href={project.link} target="_blank">
                Link to Website
              </a>
            ) : null}
            {project.name == "NUSocial Mobile Application" ? (
              <a href={project.link} target="_blank">
                Link to App
              </a>
            ) : null}
            {project.name == "3D Geometry Mobile Application" ? (
              <a href={project.link} target="_blank">
                Link to Github Repo
              </a>
            ) : null}
            <br></br>
            <br></br>
          </div>
        );
      });
      var soft = this.props.data.soft.map(function (s) {
        return (
          <div key={s.name}>
            <h3>{s.name}</h3>
            <p>{s.description}</p>
          </div>
        );
      });
      var achievments = this.props.data.achievments.map(function (achievment) {
        return (
          <div key={achievment.name}>
            <h3>{achievment.name}</h3>
            <p className="info">
              {achievment.title}
              <span>&bull;</span> <em className="date">{achievment.years}</em>
            </p>
            <p>{achievment.description}</p>
          </div>
        );
      });
      var skills = this.props.data.skills.map(function (skills) {
        var className = "bar-expand " + skills.name.toLowerCase();
        return (
          <li key={skills.name}>
            <span style={{ width: skills.level }} className={className}></span>
            <em>{skills.name}</em>
          </li>
        );
      });
    }

    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">{education}</div>
            </div>
          </div>
        </div>

        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Achievments</span>
            </h1>
          </div>

          <div className="nine columns main-col">{achievments}</div>
        </div>

        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Work</span>
            </h1>
          </div>

          <div className="nine columns main-col">{work}</div>
        </div>

        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <p>{skillmessage}</p>

            <div className="bars">
              <ul className="skills">{skills}</ul>
            </div>
          </div>
        </div>
        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Projects</span>
            </h1>
          </div>

          <div className="nine columns main-col">{projects}</div>
        </div>
        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Other Skills</span>
            </h1>
          </div>

          <div className="nine columns main-col">{soft}</div>
        </div>
      </section>
    );
  }
}

export default Resume;
