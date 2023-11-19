import React from 'react';
import '../../style/contact.css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import avatar01 from '../../img/avatar01-removebg-preview.png';
import avatar02 from '../../img/avat02-removebg-preview.png';
import avatar03 from '../../img/avatar03-removebg-preview.png';
import avatar04 from '../../img/avatar04-removebg-preview.png';

const Contact = () => {
  return (
    <main id="mainContent">
      <section className="contact" id="contact">
        <div className="container sliders">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={2}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            className="mySwiper">
            <SwiperSlide>
              <div className="slide__item">
                <div className="slide__img">
                  <img src={avatar01} alt="" />
                </div>

                <h4 className="title">John Doe</h4>
                <p className="paragraph">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum quo nulla voluptatum?
                </p>

                <div className="btn-box">
                  <button className="contractPay">
                    Contract
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide__item">
                <div className="slide__img">
                  <img src={avatar04} alt="" />
                </div>

                <h4 className="title">Amelia Alan</h4>
                <p className="paragraph">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum quo nulla voluptatum?
                </p>

                <div className="btn-box">
                  <button className="contractPay">
                    Contract
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide__item">
                <div className="slide__img">
                  <img src={avatar03} alt="" />
                </div>

                <h4 className="title">William Eve</h4>
                <p className="paragraph">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum quo nulla voluptatum?
                </p>

                <div className="btn-box">
                  <button className="contractPay">
                    Contract
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide__item">
                <div className="slide__img">
                  <img src={avatar02} alt="" />
                </div>

                <h4 className="title">Robert John</h4>
                <p className="paragraph">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum quo nulla voluptatum?
                </p>

                <div className="btn-box">
                  <button className="contractPay">
                    Contract
                  </button>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </main>
  );
}

export default Contact;
