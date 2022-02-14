import React, { Component } from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Badge from "react-bootstrap/Badge";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHourglass, faCodeBranch } from '@fortawesome/free-solid-svg-icons'

class Experience extends Component {
    render() {

        var myExp = [
            {
                "company": "Trainer Goes Online",
                "title": "Flutter Developer Intern",
                "years": "Dec 2021 - Present",
                "mainTech": [],
                "technologies": [
                    "Flutter",
                    "Google cloud",
                    "Firebase",
                    "Stripe",
                    "Node JS",
                    "FCM", "Web Scraping", "Python", "Team Management"
                ]
            },
            {
                "company": "Retrograde Innovations",
                "title": "Full Stack Developer (Part time)",
                "years": "Aug 2021 - Present",
                "mainTech": [],
                "technologies": [
                    "Node JS",
                    "Express",
                    "PostgreSQL",
                    "React JS",
                    "Sequelize ORM",
                    "MongoDB",
                    "Mongoose",
                    "Google Play Console",
                    "UI/UX",
                    "Figma",
                    "Canva",
                    "Project Manager",
                ]
            },
            {
                "company": "The W.H.Y Campaign",
                "title": "Full Stack Developer Intern",
                "years": "Jul 2021 - Oct 2021",
                "mainTech": [],
                "technologies": [
                    "Flutter",
                    "Google cloud",
                    "React JS",
                    "Firestore",
                    "Team Leader"
                ]
            },
            {
                "company": "IAMU LLC",
                "title": "Software Developer (Part time)",
                "years": "Jan 2021 - Jul 2021",
                "mainTech": [],
                "technologies": [
                    "Flutter",
                    "REST API",
                    "WebSockets",
                    "WebRTC",
                    "Socket IO",
                    "Node JS",
                    "Jitsi Meet",
                    "Cloud Messaging",
                    "iOS"
                ]
            },
            {
                "company": "Red Positive (OPC) Service. Pvt. Limited",
                "title": "Flutter Developer Intern",
                "years": "Aug 2020 - Dec 2020",
                "mainTech": [],
                "technologies": [
                    "Flutter",
                    "Firebase",
                    "Cloud Messaging",
                    "Google Maps API"
                ]
            },
            {
                "company": "Naaniz Seller Services Pvt Ltd",
                "title": "Frontend Intern",
                "years": "May 2020 - June 2020",
                "mainTech": [],
                "technologies": [
                    "Flutter",
                    "Firebase"
                ]
            }
        ];

        var work = myExp.map(function (work, i) {
            const technologies = work.technologies;
            const mainTechnologies = work.mainTech;

            var mainTech = mainTechnologies.map((technology, i) => {
                return (
                    <Badge pill className="main-badge mr-2 mb-2" key={i}>
                        {technology}
                    </Badge>
                );
            });
            var tech = technologies.map((technology, i) => {
                return (
                    <Badge pill className="experience-badge mr-2 mb-2" key={i}>
                        {technology}
                    </Badge>
                );
            });
            return (
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date={work.years}
                    iconStyle={{
                        background: "#AE944F",
                        color: "#fff",
                        textAlign: "center",
                    }}
                    icon={<FontAwesomeIcon icon={faCodeBranch} />}
                    key={i}
                >
                    <div style={{ textAlign: "left", marginBottom: "4px" }}>
                        {mainTech}
                    </div>

                    <h3
                        className="workexcard-title"
                        style={{ textAlign: "left" }}
                    >
                        {work.title}
                    </h3>
                    <h4
                        className="workexcard-subtitle"
                        style={{ textAlign: "left" }}
                    >
                        {work.company}
                    </h4>
                    <div style={{ textAlign: "left", marginTop: "15px" }}>{tech}</div>
                </VerticalTimelineElement>
            );
        });


        return (
            <section id="work" className="resume">
                <div className="col-md-12 mx-auto">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="title-box text-center">
                                <h3 className="title-a">Work-Ex</h3>
                                <p className="subtitle-a">
                                    Having worked with many startups, here is my work experience and the technologies I've worked on...
                                </p>
                                <div className="line-mf"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-8 mx-auto">
                    <VerticalTimeline>
                        {work}
                        <VerticalTimelineElement
                            iconStyle={{
                                background: "#AE944F",
                                color: "#fff",
                                textAlign: "center",
                            }}
                            icon={
                                <FontAwesomeIcon icon={faHourglass} />
                            }
                        />
                    </VerticalTimeline>
                </div>
            </section>
        );
    }
}

export default Experience;
