import React from 'react';
import '../../style/exercises.css';
import icon01 from '../../img/icon01-removebg-preview.png';
import icon02 from '../../img/icon02-removebg-preview.png';
import icon03 from '../../img/icon03-removebg-preview.png';

const Exercises = () => {
  return (
    <main id="mainContent">
      <section className="Exercises" id="Exercises">
        <div className="container">
          <div className="content__exercise">
            <h1 className="title">
              Benefits of <span>Exercise</span>
            </h1>

            <p className="paragraph">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. In ut id
              ducimus, quia ipsam beatae tempore praesentium, quam, pariatur
              numquam facilis harum nihil et reprehenderit recusandae inventore
              quaerat excepturi sed?
            </p>
          </div>

          <div className="exercise_wrapper">
            <div
              className="exercise__item"
              data-aos="zoom-in"
              data-aos-duration="1500">
              <span className="exercises_icon">
                <img src={icon01} alt="#" />
              </span>

              <div className="exercise__content">
                <h4 className="title">Healthy Life</h4>
                <p className="paragraph">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>

            <div
              className="exercise__item"
              data-aos="zoom-in"
              data-aos-duration="1500">
              <span className="exercises_icon">
                <img src={icon02} alt="#" />
              </span>

              <div className="exercise__content">
                <h4 className="title">Increased Flexibility</h4>
                <p className="paragraph">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>

            <div
              className="exercise__item"
              data-aos="zoom-in"
              data-aos-duration="1500">
              <span className="exercises_icon">
                <img src={icon03} alt="#" />
              </span>

              <div className="exercise__content">
                <h4 className="title">Decreases stress</h4>
                <p className="paragraph">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Exercises;
