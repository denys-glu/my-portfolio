import React from 'react'


//Styles
import './Projects.styles.css';

//Images
import vfLogo from '../../assets/images/vf-logo.png';
import myKanban from '../../assets/images/myKanban.png';
import iPhoneFrame from '../../assets/images/iphone-frame.png';
import slide1 from '../../assets/slides/1.png';
import slide2 from '../../assets/slides/2.png';
import slide3 from '../../assets/slides/3.png';

const Projects = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-4">
          <div className="heading-line"></div>
          <h3>Projects</h3>
          <h6 className="text-secondary uppercase">Some of my projects</h6>
        </div>
        <div className="col">
          <div className="row">
            <div className="col-12 col-sm-6 col-md-12 col-lg-6">
              <div className="card">
                <img src={vfLogo} className="card-img-top" width="288" height="288" alt="my vodafone project logo" />
                <div className="card-body">
                  <h3 className="card-title">My Vodafone</h3>
                  <p className="card-text">Your mobile independence</p>
                  <button className="btn btn-secondary"
                    data-toggle="modal"
                    data-target="#exampleModal">Show Details</button>
                </div>
                <div className="overlay"></div>
              </div>
              {/* Modal */}
              <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">My Vodafone</h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      {/* Carousel */}

                      <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                        {/* <ol class="carousel-indicators">
                      <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                      <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                      <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                    </ol> */}
                        <div className="carousel-inner">
                          <div className="carousel-item active">
                            <img src={slide1} height="997" className="d-block w-100" alt="..." />
                            {/* <div className="carousel-caption d-none d-md-block">
                          <h5>First slide label</h5>
                          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </div> */}
                          </div>
                          <div className="carousel-item">
                            <img src={slide2} height="997" className="d-block w-100" alt="..." />
                            {/* <div className="carousel-caption d-none d-md-block">
                          <h5>Second slide label</h5>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div> */}
                          </div>
                          <div className="carousel-item">
                            <img src={slide3} height="997" className="d-block w-100" alt="..." />
                            {/* <div className="carousel-caption d-none d-md-block">
                          <h5>Third slide label</h5>
                          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </div> */}
                          </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                          <span className="carousel-control-next-icon" aria-hidden="true"></span>
                          <span className="sr-only">Next</span>
                        </a>
                      </div>
                      {/* Carousel ends */}
                      <div className="project-description mt-4">
                        <h5 className="text-center">Project highlights</h5>
                        <ul className="list-group">
                          <li className="list-group-item">Geolocation service</li>
                          <li className="list-group-item">Push notification feature</li>
                          <li className="list-group-item">Multi account possibility</li>
                          <li className="list-group-item">Offline work</li>
                          <li className="list-group-item">Supports Android and iOS users (Ionic and Cordova) </li>
                        </ul>
                      </div>

                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                  </div>
                </div>
              </div>
              {/* Modal ends */}
            </div>
            <div className="col-12 col-sm-6 col-md-12 col-lg-6 pt-3">
              <div className="card">
                <img src={myKanban} className="card-img-top" width="288" height="288" alt="my vodafone project logo" />
                <div className="card-body">
                  <h3 className="card-title">My Kanban</h3>
                  <p className="card-text">Simple kanban board for daily use</p>
                  <button className="btn btn-secondary"
                    data-toggle="modal"
                    data-target="#exampleModal1">Show Details</button>
                </div>
                <div className="overlay"></div>
              </div>
              {/* Modal */}
              <div className="modal fade" id="exampleModal1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">MyKanban</h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">

                      <div className="project-description mt-4">
                        <h5 className="text-center">Project highlights</h5>
                        <ul class="list-group">
                          <li class="list-group-item">Drag&Drop feauture</li>
                          <li class="list-group-item">MERN stack</li>
                          <li class="list-group-item">Hosted at AWS</li>
                          <li class="list-group-item">Ability to group by project and tickets</li>
                        </ul>
                      </div>

                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                      <a type="button" href="http://18.224.15.81/" target="_blank" className="btn btn-main">Try It!</a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Modal ends */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
