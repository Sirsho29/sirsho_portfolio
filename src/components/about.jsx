import React from "react";
import myImage from "../img/myImage.png";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        { id: "Flutter_skill", content: "Flutter & Dart", porcentage: "90%", value: "90" },
        { id: "C++_skill", content: "C & C++", porcentage: "80%", value: "80" },
        { id: "HTML5_skill", content: "HTML5", porcentage: "80%", value: "80" },
        { id: "CSS3_skill", content: "CSS3", porcentage: "75%", value: "75" },
        {
          id: "JavaScript_skill",
          content: "JavaScript",
          porcentage: "90%",
          value: "90"
        },
        {
          id: "NodeJS_skill",
          content: "NodeJS & Express",
          porcentage: "90%",
          value: "90"
        },
        {
          id: "ReactJS_skill",
          content: "ReactJS",
          porcentage: "70%",
          value: "70"
        },
        {
          id: "Python_skill",
          content: "Python",
          porcentage: "80%",
          value: "80"
        },
        {
          id: "SQL_skill",
          content: "MySQL & PostgreSQL",
          porcentage: "90%",
          value: "90"
        },
        {
          id: "Mongo_skill",
          content: "MongoDB",
          porcentage: "60%",
          value: "60"
        },
        {
          id: "Firebase_skill",
          content: "Firebase",
          porcentage: "90%",
          value: "90"
        },
        {
          id: "AWS_skill",
          content: "AWS",
          porcentage: "50%",
          value: "50"
        },

      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            "Hello, I am Sirsha Chakraborty, a third year undergrad at KIIT Bhubaneswar pursuing BTech in Computer Science and Engineering. I take pride in my technical skills which I have been building over the last three years by working extensively in the software industry."
        },
        {
          id: "second-p-about",
          content:
            "Among the four internships that I have done till date, I would like to explain about two of them in detail. Firstly, at IAMU LLC, I was responsible for building android and iOS apps, making it highly optimized and integrating a lot of features that were completely new to me. After researching and successfully implementing the new features, I was hugely applauded by the organization. At TGO,  I was given the task of redesigning the frontend part of the app and rewriting few APIs that were having huge response times. I was able to decrease the response time by almost 80% with the help of efficient SQL queries and using caching techniques."
        },
        {
          id: "third-p-about",
          content:
            "Apart from the internships, I have been working as a part time software developer at a startup. Being one of the co-founders, I have a good knowledge of project management as I have been managing the tech interns working in developing the product for our startup. Also, being the tech lead in the startup, I have a learnt a lot of things the hard way and surely this enhances my experiences in the field of software development."
        }
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      {/* <p className="title-s">Skill</p> */}
                      {this.state.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.porcentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.porcentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
