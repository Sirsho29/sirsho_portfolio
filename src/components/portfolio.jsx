import React from "react";

//import stock
import chess1 from "../img/projects/chess1.png";
import chess2 from "../img/projects/chess2.png";
import chess3 from "../img/projects/chess3.png";
import chat1 from "../img/projects/chat1.png";
import frac1 from "../img/projects/frac1.png";
import frac2 from "../img/projects/frac2.png";
import frac3 from "../img/projects/frac3.png";
import todo1 from "../img/projects/todo1.png";
import todo2 from "../img/projects/todo2.png";


class Portfolio extends React.Component {
  render() {
    return (
      <section id="project" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Projects</h3>
                <p className="subtitle-a">
                  Showcasing few of my projects...
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="work-box">
                <a href={chess1} data-lightbox="gallery-vmarine">
                  <div className="work-img">
                    <img src={chess1} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Chekmate</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            Flutter AWS Firebase FCM
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                {/* <a
                  href={chess1}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a> */}
                <a
                  href={chess2}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={chess3}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>

              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={frac1} data-lightbox="gallery-todo">
                  <div className="work-img">
                    <img src={frac1} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Fraction</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            ReactJS
                          </span>
                          {/*} / <span className="w-date">18 Sep. 2018</span>*/}
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                {/* <a
                  href={frac1}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a> */}
                <a
                  href={frac2}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={frac3}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={todo1} data-lightbox="gallery-aguadeluz">
                  <div className="work-img">
                    <img src={todo1} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">TODO App</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            Flutter Firebase
                          </span>{" "}
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                {/* <a
                  href={todo1}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a> */}
                <a
                  href={todo2}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>

              </div>
            </div>

          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
