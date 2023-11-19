import React from 'react';
import '../../style/home.css';
import homeImg from '../../img/running-home-removebg-preview.png';
import weightIcon from '../../img/wight.png';

const Home = () => {
  return (
    <main id="mainContent">
      <section className="home" id="home">
        <div className="container">
          <div className="home__content">
            <h1 className="title" data-aos="fade-up" data-aos-duration="1500">
              Exercise is the key to a <span>Success</span>
            </h1>
            <p
              className="paragraph"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1800">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>

            <div
              className="home__btns"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="2000">
              <button className="btn__home">Get Started</button>
              <button className="watch__btn">
                <span className="span01">
                  <i class="ri-play-fill"></i>
                </span>
                <span className="span02">Watch Video</span>
              </button>
            </div>
          </div>

          <div className="home__img">
            <div className="img__content">
              <div className="box-01">
                <div className="box-02">
                  <div className="box-03">
                    <div className="box__img">
                      <img src={homeImg} alt="#" />
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="heart__favorite"
                data-aos="fade-left"
                data-aos-duration="1500">
                <h5 className="title">Heart Rate</h5>
                <span>
                  <i class="ri-heart-pulse-fill" id="icon-heart"></i>
                </span>
                <h6 className="title02">1000 BPM</h6>
              </div>

              <div
                className="gym__location"
                data-aos="fade-right"
                data-aos-duration="1500">
                <span>
                  <i class="ri-map-pin-2-fill" id="icon_location"></i>
                </span>
                <h5 className="title">Find a new Gym for you</h5>
              </div>

              <div
                className="weight__icon"
                data-aos="fade-down"
                data-aos-duration="1500">
                <img src={weightIcon} alt="#" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
