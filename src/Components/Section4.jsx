import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import testi1 from "./Images/userlog.jpg";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Quateimg from "./Images/motive-quote.png";

export default function Section4() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12 p-5">
            <p className="bgcolortext ps-3">What Inspiring Me</p>
            <h2 className="font-styleX ps-2">
              {" "}
              Qu<strong className="bgcolortext">o</strong>t
              <strong className="bgcolortext">es</strong>
            </h2>
            <div className="container mt-4">
              <div className="row position-relative">
                <button
                  className="carousel-control-prev btn "
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev"
                >
                  <span className="text-danger" aria-hidden="true">
                    <i>
                      <FontAwesomeIcon icon={faArrowLeft} />
                    </i>
                  </span>
                  <span className="visually-hidden">Previous</span>
                </button>

                <button
                  className="carousel-control-next "
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next"
                >
                  <span className="text-danger" aria-hidden="true">
                    <i>
                      <FontAwesomeIcon icon={faArrowRight} />
                    </i>
                  </span>
                  <span className="visually-hidden">Next</span>
                </button>
                {/* ///////////////////////////////// */}

                <div className="col-md-12">
                  <div
                    id="carouselExampleIndicators"
                    className="carousel slide"
                  >
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <div className="row ">
                          <div className="col-md-4">
                            <div className="test-img">
                              <img src={testi1} width={"90%"} alt="" />
                            </div>
                          </div>
                          <div className="col-md-8 pe-4">
                            <div className="test-icon pt-2">
                              <img src={Quateimg} className="mb-5" alt="" />
                            </div>

                            <div className="test-detail p-4 ">
                              <p>
                               <strong className="bgcolortext">Success begins with persistence—</strong>Every  failure is
                                a lesson, every setback a stepping stone. Keep
                                pushing forward, embrace challenges, and believe
                                in your potential. Great things come to those
                                who refuse to quit.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* ///////////////////////////////////////////////////////// */}
                      <div className="carousel-item">
                        <div className="row pb-3">
                          <div className="col-md-4">
                            <div className="test-img">
                              <img src={testi1} width={"90%"} alt="" />
                            </div>
                          </div>
                          <div className="col-md-8">
                            <div className="test-icon pt-2">
                              <img src={Quateimg} className="mb-5" alt="" />
                            </div>

                            <div className="test-detail p-4 ">
                              <p>
                              <strong className="bgcolortext">Dream big, work hard, stay focused—</strong>Your
                                determination shapes your destiny. Challenges
                                will come, but resilience turns obstacles into
                                opportunities. Keep striving, stay patient, and
                                trust the journey.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* ///////////////////////////////////////////// */}
                      <div className="carousel-item">
                        <div className="row ">
                          <div className="col-md-4">
                            <div className="test-img">
                              <img src={testi1} width={"90%"} alt="" />
                            </div>
                          </div>
                          <div className="col-md-8 ">
                            <div className="test-icon pt-2">
                              <img src={Quateimg} className="mb-5" alt="" />
                            </div>

                            <div className="test-detail p-4 ">
                              <p>
                              <strong className="bgcolortext">Your growth is limitless—</strong>Every small effort adds
                                up to big achievements. Stay consistent, embrace
                                learning, and never fear failure. The best
                                version of yourself is just one step outside
                                your comfort zone.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* ///////////////////////////////////////////////// */}
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                </div>
              </div>
            </div>
            {/* //////////////////////////////////////////////// */}
          </div>
        </div>
      </div>
    </>
  );
}
