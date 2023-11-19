import React from 'react';
import '../../style/trainer.css';
import trainerImg from '../../img/person.jpg';

const Trainer = () => {
  return (
    <main id="mainContent">
      <section className="trainer" id="trainer">
        <div className="container">
          <div className="trainer__wrapper">
            <div className="trainer_img">
              <img
                src={trainerImg}
                alt=""
                data-aos="fade-left"
                data-aos-duration="1500"
              />
            </div>

            <div
              className="trainer__content"
              data-aos="fade-right"
              data-aos-duration="1500">
              <h1 className="title">
                Ready for a better <span>living condition?</span>
              </h1>
              <p className="paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
                provident eveniet saepe voluptatibus sequi vero aspernatur
                similique mollitia non, qui libero deserunt? Dolore optio
                eligendi iste quas, incidunt fugit consequuntur.
              </p>

              <div className="btn-box">
                <button className="trainerStart">Get Started</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Trainer;
